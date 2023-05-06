import { Path } from "../../../models/learningPath.js";
import { User } from "../../../models/user.js";
import axios from "axios";
import qs from "qs";

function levelFinder(num) {
  let level = 0;
  let a = 1,
    b = 1;
  while (b <= num) {
    const temp = a + b;
    a = b;
    b = temp;
    level++;
  }
  return level;
}

const setProgressStatus = (treeData, key, progress) => {
  treeData.forEach((element) => {
    if (element.key === key) {
      element.progress = progress === "done" ? true : false;
      return;
    } else if (
      Object.keys(element).includes("children") &&
      element.children.length > 0
    ) {
      element.children = setProgressStatus(element.children, key, progress);
    }
  });
  return treeData;
};

const commonFunc = (data) => {
  let { path, key, skill, points, res, progress } = data;
  let oldProgress = JSON.parse(path.completedPaths);
  let currentLevelProgress = JSON.parse(path.levelProgress);
  let pathPoints = JSON.parse(path.points);
  if (progress === "done") {
    oldProgress.push(key);
  } else if (progress === "todo") {
    let point = 1;
    if (Object.keys(pathPoints).includes(key)) {
      point = pathPoints[key];
    }
    oldProgress.splice(oldProgress.indexOf(key), 1);
    currentLevelProgress[skill].points =
      Number(currentLevelProgress[skill].points) - point;
    currentLevelProgress[skill].level = levelFinder(
      Number(currentLevelProgress[skill].points) - point
    );
  }
  let treeData = JSON.parse(path.treeData);
  treeData = setProgressStatus(treeData, key, progress);
  path.completedPaths = JSON.stringify(oldProgress);
  path.treeData = JSON.stringify(treeData);
  const sumPoints = progress === "todo" ? 0 : Number(points);
  let currentPoints = Object.keys(currentLevelProgress).includes(skill)
    ? Number(currentLevelProgress[skill].points) + sumPoints
    : Number(points);
  currentLevelProgress[skill] = {
    level: levelFinder(currentPoints),
    points: currentPoints,
  };
  let filteredProgress = Object.fromEntries(
    Object.entries(currentLevelProgress).filter(
      ([key, value]) => key !== "total"
    )
  );
  let allLevels = Object.values(filteredProgress).map((item) =>
    Number(item.level)
  );
  let allPoints = Object.values(filteredProgress).map((item) =>
    Number(item.points)
  );
  let ls = 0;
  for (let index = 0; index < allLevels.length; index++) {
    ls = ls + allLevels[index];
  }
  let lp = 0;
  for (let index = 0; index < allPoints.length; index++) {
    lp = lp + allPoints[index];
  }
  currentLevelProgress["total"] = {
    level: levelFinder(ls),
    points: lp,
  };
  path.levelProgress = JSON.stringify(currentLevelProgress);
  path
    .save()
    .then(() => res.status(200).json({ message: "Success" }))
    .catch((err) => res.status(200).json({ message: err.message }));
};

export const editProgress = async (req, res) => {
  const { key, talentId, progress, skill, points } = req.body;
  if (req.user.userId) {
    if (talentId) {
      await Path.findOne({ where: { talentId } })
        .then(async (path) => {
          const dataFunc = { path, key, skill, points, res, progress };
          if (key) {
            const fccKeys = ["74", "91", "167", "109"];
            if (fccKeys.includes(key)) {
              await User.findOne({ where: { id: talentId } }).then(
                async (user) => {
                  if (user.freeCodeCampId) {
                    const data = qs.stringify({
                      username: user.freeCodeCampId,
                    });
                    var config = {
                      method: "GET",
                      url: "https://api.freecodecamp.org/api/users/get-public-profile",
                      headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                      },
                      data: data,
                    };
                    await axios(config)
                      .then((result) => {
                        const resultData = Object.values(
                          result.data.entities.user
                        )[0];
                        if (
                          key === "74" &&
                          resultData.isJsAlgoDataStructCert === false
                        ) {
                          return res.status(400).json({
                            message: "Please achieve this course certificate.",
                          });
                        } else if (
                          (key === "91" || key === "167") &&
                          resultData.isRespWebDesignCert === false
                        ) {
                          return res.status(400).json({
                            message: "Please achieve this course certificate.",
                          });
                        } else if (
                          key === "109" &&
                          resultData.isFrontEndLibsCert === false
                        ) {
                          return res.status(400).json({
                            message: "Please achieve this course certificate.",
                          });
                        } else {
                          commonFunc(dataFunc);
                        }
                      })
                      .catch((error) =>
                        res.status(400).json({ message: error.message })
                      );
                  } else {
                    return res.status(400).json({
                      message:
                        "Please add your FreeCodeCamp username in HiTalent Profile.",
                    });
                  }
                }
              );
            } else {
              commonFunc(dataFunc);
            }
          } else {
            return res.status(400).json({ message: "No path selected" });
          }
        })
        .catch((err) => res.status(200).json({ message: err.message }));
    } else {
      return res.status(400).json({ message: "Select talents." });
    }
  } else {
    return res
      .status(400)
      .json({ message: "You are unauthorized to do this job." });
  }
};
