import { Path } from "../../../models/learningPath.js";
export const editPath = async (req, res) => {
    const { talentId } = req.body;
    let treeData = req.body.treeData;
    if (!Array.isArray(treeData)) {
      treeData = [treeData];
    }
    if (talentId) {
      await Path.findOne({ where: { talentId: talentId } })
        .then(async (path) => {
          await path
            .update({ treeData: JSON.stringify(treeData) })
            .then((editedPath) => {
              return res.status(200).json({
                message: "Success",
                treeData: JSON.parse(editedPath.treeData),
              });
            })
            .catch((err) => res.status(400).json({ message: err.message }));
          // }
        })
        .catch((err) => res.status(400).json({ message: err.message }));
    } else {
      return res.status(400).json({ message: "Select talent." });
    }
  };
