import { Path } from "../../../models/learningPath.js";

export const getProgress = async (req, res) => {
  if (req.query.talentId) {
    await Path.findOne({
      where: { talentId: req.query.talentId },
    })
      .then((path) => {
        if (path) {
          return res.status(200).json({
            levelProgress: JSON.parse(path.levelProgress),
          });
        }
      })
      .catch((err) => res.status(400).json({ message: err.message }));
  } else {
    return res.status(400).json({ message: "Invalid talent" });
  }
};

export const getAllTalentsProgress = async (req, res) => {
  await Path.findAll()
    .then((path) => {
      const level = path.map((item) => {
        const { talentId, levelProgress, lang, track, ...rest } = item;
        const data = {};
        data[talentId] = {
          levelProgress: JSON.parse(levelProgress),
          lang,
          track,
        };
        return data;
      });
      return res.status(200).json(
        level.reduce((acc, curr) => {
          return Object.assign(acc, curr);
        }, {})
      );
    })
    .catch((err) => res.status(400).json({ message: err.message }));
};
