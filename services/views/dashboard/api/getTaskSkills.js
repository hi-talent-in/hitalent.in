import { Path } from "../../../models/learningPath.js";
export const getTaskSkills = async (req, res) => {
    const { talentId } = req.query;
    await Path.findOne({ where: { talentId } })
      .then((taskSkills) =>
        res.status(200).json({
          taskSkills: taskSkills ? JSON.parse(taskSkills.skills) : null,
        })
      )
      .catch((error) => res.status(400).json({ message: error.message }));
  };