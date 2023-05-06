import { Path } from "../../../models/learningPath.js";
export const addResources = async (req, res) => {
    const { key, talentId, name, link } = req.body;
    if (req.user.userId) {
      if (talentId) {
        await Path.findOne({ where: { talentId: talentId } })
          .then((path) => {
            if (key) {
              const oldResources = JSON.parse(path.resources);
              if (Object.keys(oldResources).includes(key)) {
                oldResources[key].push({
                  name: name,
                  link: link,
                });
              } else {
                oldResources[key] = [{ name: name, link: link }];
              }
              path
                .update({ resources: JSON.stringify(oldResources) })
                .then(() => res.status(200).json({ message: "Success" }))
                .catch((err) => res.status(200).json({ message: err.message }));
            } else {
              return res.status(400).json({ message: "No key" });
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
