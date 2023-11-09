import { Path } from "../../../models/learningPath.js";
import { getKeys } from "../functions/getKeys.js";

const mapFunc = (mapData) =>
  mapData.map((item) => {
    if (Object.keys(item).includes("children") && item.children.length > 0) {
      mapFunc(item);
    } else {
      return;
    }
  });

const getTrueFilteredData = (treeData, cond) =>
  treeData.filter((item) => item.title === cond);

export const savesStepProgress = async (req, res) => {
  const { talentId } = req.query;
  if (talentId) {
    await Path.findOne({ where: { talentId } })
      .then((path) => {
        const loopData = ["Beginner", "Intermediate", "Advanced"];
        const treeData = JSON.parse(path.treeData);
        for (let index = 0; index < loopData.length; index++) {
          if (loopData[index].title === "Beginner") {
            const element = getKeys(getTrueFilteredData(treeData, "Beginner"));
          }
        }
      })
      .catch((err) => res.status(400).json({ message: err.message }));
  } else {
    return res.status(400).json({ message: "Invalid Talent." });
  }
};
