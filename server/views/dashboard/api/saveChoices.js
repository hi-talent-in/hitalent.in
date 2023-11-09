import { Path } from "../../../models/learningPath.js";
import {
  extractNestedObjects,
  extractNestedObjectsByKey,
} from "../functions/extractNestedObjects.js";
import { removeTreeData } from "../functions/removeTreeData.js";
import { removeEmptyTreeData } from "../functions/removeEmptyTreeData.js";
import { filterTreeData } from "../functions/filterTreeDataByKey.js";
import { getKeys } from "../functions/getKeys.js";
import { removeEmptyObject } from "../functions/removeEmptyObjects.js";

const filterSame = (f, t, d) => {
  t.forEach((item, index) => {
    const defaultObj = d.find((o) => o.key === item.key);
    if (defaultObj) {
      const defaultIndex = d.findIndex((item1) => item1.key === item.key);
      if (
        Object.keys(item).includes("children") &&
        item.children.length > 0 &&
        Object.keys(d[defaultIndex]).includes("children") &&
        d[defaultIndex].children.length > 0
      ) {
        item.children = filterSame(f, item.children, d[defaultIndex].children);
      }
    } else if (f.includes(item.key)) {
      t[index] = {};
    }
  });
  return t;
};

export const saveChoices = async (req, res) => {
  const { talentId, lang, track } = req.body;
  if (talentId) {
    await Path.findOne({
      where: { talentId },
    })
      .then(async (path) => {
        let treeData;
        const defaultData = await Path.findOne({
          where: { talentId: 2023 },
        }).then((data) => JSON.parse(data.treeData));
        treeData = JSON.parse(path.treeData);
        if (lang) {
          treeData = removeTreeData(treeData, "javascript");
          treeData = removeTreeData(treeData, "python");
          treeData = removeTreeData(treeData, "java");
          treeData = removeTreeData(treeData, "backend");
          treeData = removeTreeData(treeData, "frontend");
          treeData = filterTreeData(treeData, "84");
          extractNestedObjects(defaultData, treeData, lang);
          treeData = removeEmptyTreeData(treeData, "key");
          if (lang === "python" || lang === "javascript") {
            extractNestedObjectsByKey(defaultData, treeData, "84");
            treeData = removeEmptyTreeData(treeData, "key");
          }
          treeData = removeEmptyTreeData(treeData, "key");
          path.lang = lang;
          path.track = "";
        }
        if (track) {
          if (path.lang) {
            treeData = removeTreeData(treeData, "backend");
            treeData = removeTreeData(treeData, "frontend");
            if (path.lang === "python") {
              treeData = removeTreeData(treeData, "javascript");
            }
            if (track === "frontend" || track === "fullstack") {
              if (path.lang === "python") {
                treeData = removeTreeData(treeData, "javascript");
                extractNestedObjects(defaultData, treeData, "javascript");
                treeData = removeEmptyTreeData(treeData, "key");
              }
              extractNestedObjects(defaultData, treeData, "frontend");
              treeData = removeEmptyTreeData(treeData, "key");
            }
            if (track === "backend" || track === "fullstack") {
              extractNestedObjects(defaultData, treeData, "backend");
              treeData = removeEmptyTreeData(treeData, "key");
              if (path.lang === "javascript") {
                treeData = removeTreeData(treeData, "fastapi");
              } else if (path.lang === "python") {
                treeData = removeTreeData(treeData, "nodejs");
                treeData = removeTreeData(treeData, "expressjs");
              }
            }
            path.track = track;
          } else {
            return res
              .status(400)
              .json({ message: "First select a language from beginner." });
          }
        }
        const tk = getKeys(treeData);
        const filterTk = tk.filter(
          (value, index) => tk.indexOf(value) !== index
        );
        if (filterTk.length > 0) {
          filterSame(filterTk, treeData, defaultData);
        }
        treeData = removeEmptyObject(treeData);
        path.treeData = JSON.stringify(treeData);
        path
          .save()
          .finally(() => {
            return res.status(200).json({
              message: "Success",
            });
          })
          .catch((err) => res.status(400).json({ message: err.message }));
      })
      .catch((err) => res.status(400).json({ message: err.message }));
  } else {
    return res.status(400).json({ message: "Invalid talent" });
  }
};
