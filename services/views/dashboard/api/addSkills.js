import { KeyValuePairs } from "../../../models/learningPath.js";

export const addSkills = async (req, res) => {
  const userId = req.user.userId;
  if (userId) {
    await KeyValuePairs.findOne({ where: { key: "skills" } })
      .then(async (skills) => {
        const { name } = req.body;
        if (skills && name) {
          const oldSkills = JSON.parse(skills.value);
          oldSkills.push(name);
          await skills
            .update({
              value: JSON.stringify(oldSkills),
            })
            .then((skills) => {
              return res.status(200).json({ message: "Success" });
            })
            .catch((error) => res.status(400).json({ message: error.message }));
        } else {
          await KeyValuePairs.create({
            value: JSON.stringify([name]),
            key: "skills",
          })
            .then(() => res.status(200).json({ message: "Success" }))
            .catch((error) => res.status(400).json({ message: error.message }));
        }
      })
      .catch((error) => res.status(400).json({ message: error.message }));
  } else {
    return res
      .status(401)
      .json({ message: "You are not valid user to do this job." });
  }
};
