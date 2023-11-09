import { KeyValuePairs } from "../../../models/learningPath.js";

export const getSkills = async (req, res) => {
  await KeyValuePairs.findOne({ where: { key: "skills" } })
    .then((skillsList) =>
      res.status(200).json({
        skillSet: skillsList
          ? JSON.parse(skillsList.value).sort((a, b) => a.localeCompare(b))
          : null,
      })
    )
    .catch((error) => res.status(400).json({ message: error.message }));
};
