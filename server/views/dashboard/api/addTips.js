import { Path } from "../../../models/learningPath.js";
export const addTips = async (req, res) => {
    const { key, talentId, tip } = req.body;
    if (req.user.userId) {
      if (talentId) {
        await Path.findOne({ where: { talentId: talentId } })
          .then((path) => {
            if (key) {
              const oldTips = JSON.parse(path.tips);
              if (tip) {
                if (Object.keys(oldTips).includes(key)) {
                  oldTips[key].push(tip);
                } else {
                  oldTips[key] = [tip];
                }
              }
              path
                .update({ tips: JSON.stringify(oldTips) })
                .then(() => res.status(200).json({ message: "Success" }))
                .catch((err) => res.status(200).json({ message: err.message }));
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