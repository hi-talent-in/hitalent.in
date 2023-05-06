import { Path } from "../models/learningPath.js";
import { User } from "../models/user.js";

const removeTreeData = (treeData) =>
  treeData.filter((obj) => {
    if (
      obj.title === "Python" ||
      obj.title === "JavaScript" ||
      obj.title === "Frontend" ||
      obj.title === "Backend" ||
      obj.title === "Java" ||
      obj.key === "84"
    ) {
      return false;
    }
    if (obj.children && obj.children.length > 0) {
      obj.children = removeTreeData(obj.children);
    }
    return true;
  });

export const postProcess = async (req, res) => {
  const { selectedProgram } = req.body;
  const userId = req.user.userId;
  if (selectedProgram) {
    await User.update(
      {
        isNew: false,
        talentType: selectedProgram,
        isIntern: selectedProgram === "intern" ? true : false,
        isApprentice: selectedProgram === "apprentice" ? true : false,
      },
      { where: { id: userId } }
    )
      .then(async () => {
        await Path.findOne({ where: { talentId: 2023 } })
          .then(async (path) => {
            let treeData = removeTreeData(JSON.parse(path.treeData));
            await Path.create({
              talentId: userId,
              treeData: JSON.stringify(treeData),
              tips: path.tips,
              resources: path.resources,
              keys: path.keys,
              skills: path.skills,
              points: path.points,
            })
              .then((talentPath) => {
                return res
                  .status(200)
                  .json({ talentType: talentPath.talentType });
              })
              .catch((error) => {
                res.status(400).json({ message: error.message });
              });
          })
          .catch((error) => {
            res.status(400).json({ message: error.message });
          });
      })
      .catch((error) => {
        res.status(400).json({ message: error.message });
      });
  } else {
    return res.status(400).json({ message: "Select a program." });
  }
};
