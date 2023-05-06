import { Path } from "../../../models/learningPath.js";
export const getPoints = async (req, res) => {
    const { talentId } = req.query;
    if (talentId) {
      await Path.findOne({ where: { talentId: talentId } })
        .then((path) => res.status(200).json({ points: JSON.parse(path.points) }))
        .catch((err) => res.status(200).json({ message: err.message }));
    } else {
      return res.status(400).json({ message: "Select talents." });
    }
  };