import { Path } from "../../../models/learningPath.js";
export const editResources = async (req, res) => {
    const { key, talentId, name, link, index } = req.body;
    if (talentId) {
      await Path.findOne({ where: { talentId: talentId } })
        .then((path) => {
          if (key) {
            const oldResources = JSON.parse(path.resources);
            if (Object.keys(oldResources).includes(key)) {
              oldResources[key][index] = {
                name: name || oldResources[key][index].name,
                link: link || oldResources[key][index].link,
              };
            }
            path
              .update({ resources: JSON.stringify(oldResources) })
              .then(() => res.status(200).json({ message: "Success" }))
              .catch((err) => res.status(200).json({ message: err.message }));
          } else {
            return res.status(400).json({ message: "No key" });
          }
        })
        .catch((err) => res.status(400).json({ message: err.message }));
    } else {
      return res.status(400).json({ message: "Select talents." });
    }
  };
