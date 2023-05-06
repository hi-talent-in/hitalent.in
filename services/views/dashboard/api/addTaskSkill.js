import { Path } from "../../../models/learningPath.js";
export const addTaskSkill = async (req, res) => {
    const { key, talentId, skill } = req.body;
    if (req.user.userId) {
      if (talentId) {
        await Path.findOne({ where: { talentId: talentId } })
          .then((path) => {
            if (key) {
              const oldSkills = JSON.parse(path.skills);
              if (skill) {
                oldSkills[key] = skill;
              }
              path
                .update({ skills: JSON.stringify(oldSkills) })
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
