import { Path } from "../../../models/learningPath.js";
export const deletePath = async (req, res) => {
    const { talentId, index, whoami } = req.query;
    const indexList = index.split(",");
    if (talentId) {
      await Path.findOne({ where: { talentId: Number(talentId) } })
        .then(async (path) => {
          const grandParents = JSON.parse(path.grandParents);
          if (whoami === "gp") {
            grandParents.splice(Number(indexList[0]), 1);
          } else if (whoami === "p") {
            grandParents[Number(indexList[0])].parents.splice(
              Number(indexList[1]),
              1
            );
          } else if (whoami === "k") {
            grandParents[Number(indexList[0])].parents[
              Number(indexList[1])
            ].kids.splice(Number(indexList[2]), 1);
          } else if (whoami === "gk") {
            grandParents[Number(indexList[0])].parents[Number(indexList[1])].kids[
              Number(indexList[2])
            ].grandKids.splice(Number(indexList[3]), 1);
          }
          await path
            .update({ grandParents: JSON.stringify(grandParents) })
            .then(() => res.status(200).json({ message: "Deleted" }))
            .catch((err) => res.status(400).json({ message: err.message }));
        })
        .catch((err) => res.status(400).json({ message: err.message }));
    } else {
      return res.status(400).json({ message: "Select talent." });
    }
  };