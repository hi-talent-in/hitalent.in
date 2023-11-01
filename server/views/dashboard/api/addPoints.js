import { Path } from "../../../models/learningPath.js";
export const addPoints = async (req, res) => {
    const { key, talentId, points } = req.body;
    if (req.user.userId) {
      if (talentId) {
        await Path.findOne({ where: { talentId: talentId } })
          .then((path) => {
            if (key) {
              const oldPoints = JSON.parse(path.points);
              if (points) {
                oldPoints[key] = points;
              }
              path
                .update({ points: JSON.stringify(oldPoints) })
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
