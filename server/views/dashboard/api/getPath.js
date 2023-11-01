import { Path } from "../../../models/learningPath.js";

export const getPath = async (req, res) => {
  if (req.query.talentId) {
    await Path.findOne({
      where: { talentId: req.query.talentId },
    })
      .then((path) => {
        if (path) {
          return res.status(200).json({
            treeData: JSON.parse(path.treeData),
            itd: JSON.parse(path.treeData),
            tips: JSON.parse(path.tips),
            resources: JSON.parse(path.resources),
            lang: path.lang,
            track: path.track,
          });
        }
      })
      .catch((err) => res.status(400).json({ message: err.message }));
  } else {
    return res.status(400).json({ message: "Invalid talent" });
  }
};
