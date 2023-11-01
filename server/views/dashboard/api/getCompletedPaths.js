import { Path } from "../../../models/learningPath.js";
export const getCompletedPaths = async (req, res) => {
    const { talentId } = req.query;
    if (talentId) {
      await Path.findOne({ where: { talentId: talentId } })
        .then((path) =>
          res
            .status(200)
            .json({ completedPaths: JSON.parse(path.completedPaths) })
        )
        .catch((err) => res.status(200).json({ message: err.message }));
    } else {
      return res.status(400).json({ message: "Select talents." });
    }
  };