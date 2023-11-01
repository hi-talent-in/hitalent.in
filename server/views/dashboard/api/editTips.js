import { Path } from "../../../models/learningPath.js";
export const editTips = async (req, res) => {
    const { key, talentId, tip, index } = req.body;
    if (talentId) {
      await Path.findOne({ where: { talentId: talentId } })
        .then((path) => {
          if (key) {
            const oldTips = JSON.parse(path.tips);
            if (Object.keys(oldTips).includes(key)) {
              oldTips[key][index] = tip;
            }
            path
              .update({ tips: JSON.stringify(oldTips) })
              .then(() => res.status(200).json({ message: "Success" }))
              .catch((err) => res.status(200).json({ message: err.message }));
          } else {
            return res.status(400).json({ message: "No key" });
          }
        })
        .catch((err) => res.status(200).json({ message: err.message }));
    } else {
      return res.status(400).json({ message: "Select talents." });
    }
  };