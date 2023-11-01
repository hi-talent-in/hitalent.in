import { Path } from "../../../models/learningPath.js";
import { updateValue } from "../functions/updateValue.js";
export const editTaskName = async (req, res) => {
  const userId = req.user.userId;
  const { name, key, talentId } = req.body;
  if (userId) {
    await Path.findOne({ where: { talentId: talentId } })
      .then(async (path) => {
        let updatedTree;
        const tree = JSON.parse(path.treeData);
        for (let index = 0; index < tree.length; index++) {
          updatedTree = updateValue(tree[index], key, name);
          if (updatedTree) {
            tree[index] = updatedTree;
            break;
          }
        }
        path
          .update({ treeData: JSON.stringify(tree) })
          .then(() => res.status(200).json({ message: "Success" }))
          .catch((error) => res.status(400).json({ message: error.message }));
      })
      .catch((error) => res.status(400).json({ message: error.message }));
  } else {
    return res
      .status(401)
      .json({ message: "You are not valid user to do this job." });
  }
};
