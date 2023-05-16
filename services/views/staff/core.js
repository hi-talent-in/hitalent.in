import { User } from "../../models/user.js";

export const getTalentRole = async (req, res) => {
  const userId = req.user.userId;
  if (userId) {
    await User.findAll({ order: [["id", "ASC"]] })
      .then((users) =>
        res.status(200).json(
          users.map((user) => {
            const {
              id,
              name,
              email,
              isActive,
              isIntern,
              isApprentice,
              isMentor,
              isTalent,
              isStaff,
              isAdmin,
              ...rest
            } = user;
            return {
              id,
              name,
              email,
              isActive,
              isIntern,
              isApprentice,
              isMentor,
              isTalent,
              isStaff,
              isAdmin,
            };
          })
        )
      )
      .catch((error) => res.status(400).json({ message: error.message }));
  } else {
    return res
      .status(401)
      .json({ message: "You are not valid user to do this job." });
  }
};

export const editTalentRole = async (req, res) => {
  const userId = req.user.userId;
  const { id } = req.body;
  const data = Object.fromEntries(
    Object.entries(req.body).filter(([_, v]) => v != null && v !== "")
  );
  if (userId) {
    await User.findOne({
      where: { id: id },
    })
      .then(async (user) => {
        await user.update(data);
        return res.status(200).json({ message: "Success" });
      })
      .catch((error) => res.status(400).json({ message: error.message }));
  } else {
    return res
      .status(401)
      .json({ message: "You are not valid user to do this job." });
  }
};
