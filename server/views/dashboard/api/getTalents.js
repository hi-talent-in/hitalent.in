import { User } from "../../../models/user.js";
export const getTalents = async (req, res) => {
  await User.findAll({ where: { isTalent: true }, order: [["id", "ASC"]] })
    .then((talentGroup) => {
      const talents = talentGroup.map((talent) => {
        const {
          id,
          name,
          email,
          longestStreak,
          currentStreak,
          lastLogin,
          dateOfJoin,
          ...rest
        } = talent;
        const date = new Date(dateOfJoin);
        return {
          id,
          name,
          email,
          longestStreak,
          currentStreak,
          lastLogin,
          dateOfJoin: date.toLocaleDateString(),
        };
      });
      return res.status(200).json(talents);
    })
    .catch((err) => res.status(200).json({ message: err.message }));
};
