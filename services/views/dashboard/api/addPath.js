import { Path, KeyValuePairs } from "../../../models/learningPath.js";

export const addPath = async (req, res) => {
  const { name, talentId } = req.body;
  if (talentId) {
    await KeyValuePairs.findOne({ where: { key: "addKeyInc" } })
      .then(async (pair) => {
        await Path.findOne({ where: { talentId: talentId } })
          .then(async (talentPath) => {
            if (talentPath) {
              let treeData = JSON.parse(talentPath.treeData);
              const rootKeys = JSON.parse(talentPath.keys);
              const newKey = String(Number(pair.value) + 1);
              treeData.push({
                key: newKey,
                title: name,
                progress: false,
              });
              rootKeys.push(newKey);
              await talentPath
                .update({
                  treeData: JSON.stringify(treeData),
                  keys: JSON.stringify(rootKeys),
                })
                .then(() => {
                  pair.value = newKey;
                  pair
                    .save()
                    .then(() =>
                      res.status(200).json({ message: "Added Learning Path." })
                    )
                    .catch((err) =>
                      res.status(400).json({ message: err.message })
                    );
                })
                .catch((err) => res.status(400).json({ message: err.message }));
            } else {
              await Path.create({
                treeData: JSON.stringify([
                  { key: "1", title: name, progress: false },
                ]),
                talentId: talentId,
                keys: JSON.stringify(["1"]),
              })
                .then(() =>
                  res.status(200).json({ message: "Added Learning Path." })
                )
                .catch((err) => res.status(400).json({ message: err.message }));
            }
          })
          .catch((err) => res.status(400).json({ message: err.message }));
      })
      .catch((err) => res.status(400).json({ message: err.message }));
  } else {
    return res.status(400).json({ message: "Select talent." });
  }
};
