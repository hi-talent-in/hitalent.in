import { Path } from "../../../models/learningPath.js";
import { getProgress } from "../functions/getProgress.js";

const statusSet = (oldProgress, com) => {
  if (com === "comB") {
    return oldProgress.includes("comI") ? "finish" : "progress";
  } else if (com === "comI") {
    return oldProgress.includes("comA") ? "finish" : "progress";
  } else if (com === "comA") {
    return oldProgress.includes("comA") ? "finish" : "progress";
  }
};

const setSteps = (currentStep, oldProgress, comArray, com) => {
  const check = comArray.every((o) => oldProgress.includes(o));
  if (check) {
    if (oldProgress.includes(com) === false) {
      oldProgress.push(com);
    }
    currentStep[com] = {
      current: comArray.length,
      status: statusSet(oldProgress, com),
    };
  } else {
    if (oldProgress.includes(com)) {
      oldProgress.splice(oldProgress.indexOf(com), 1);
    }
    for (let i = 0; i < comArray.length; i++) {
      if (!oldProgress.includes(comArray[i])) {
        currentStep[com] = {
          current: i,
          status: "process",
        };
        break;
      }
    }
  }
  return { currentStep, oldProgress };
};

export const getSteps = async (req, res) => {
  const { talentId } = req.query;
  if (talentId) {
    await Path.findOne({ where: { talentId } })
      .then((path) => {
        const treeData = JSON.parse(path.treeData);
        let currentStep = JSON.parse(path.currentStep);
        let oldProgress = JSON.parse(path.completedPaths);
        let beginnerSteps;
        let intermediateSteps;
        let advancedSteps;
        for (let index = 0; index < treeData.length; index++) {
          if (
            Object.keys(treeData[index]).includes("children") &&
            treeData[index].children.length > 0
          ) {
            const steps = treeData[index].children.map((item) => item.title);
            const comArray = treeData[index].children.map((child) => {
              const getProgressList = getProgress(child);
              const truthyCheck = getProgressList.map(
                (t) => t && Object.values(t)[0]
              );
              if (truthyCheck.every((o) => o === true)) {
                if (!oldProgress.includes(`com${child.key}`)) {
                  oldProgress.push(`com${child.key}`);
                }
                return `com${child.key}`;
              } else {
                for (const z of getProgressList) {
                  const zValue = z && Object.values(z)[0];
                  const zKey = z && Object.keys(z)[0];
                  if (zValue === false && oldProgress.includes(`${zKey}`)) {
                    oldProgress.splice(oldProgress.indexOf(`${zKey}`), 1);
                    if (oldProgress.includes(`com${child.key}`)) {
                      oldProgress.splice(
                        oldProgress.indexOf(`com${child.key}`),
                        1
                      );
                    }
                  }
                }
              }
            });
            if (treeData[index].title === "Beginner") {
              beginnerSteps = steps;
              let data = setSteps(currentStep, oldProgress, comArray, "comB");
              currentStep = data.currentStep;
              oldProgress = data.oldProgress;
            } else if (treeData[index].title === "Intermediate") {
              intermediateSteps = steps;
              let data = setSteps(currentStep, oldProgress, comArray, "comI");
              currentStep = data.currentStep;
              oldProgress = data.oldProgress;
            } else if (treeData[index].title === "Advanced") {
              advancedSteps = steps;
              let data = setSteps(currentStep, oldProgress, comArray, "comA");
              currentStep = data.currentStep;
              oldProgress = data.oldProgress;
            }
          }
        }
        path.completedPaths = JSON.stringify(oldProgress);
        path.save();
        return res.status(200).json({
          beginnerSteps,
          intermediateSteps,
          advancedSteps,
          currentStep,
          completedPaths: oldProgress,
        });
      })
      .catch((err) => res.status(400).json({ message: err.message }));
  } else {
    return res.status(400).json({ message: "Invalid Talent." });
  }
};
