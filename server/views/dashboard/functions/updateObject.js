import { filterTreeData } from "./filterTreeDataByKey.js";

export const updateObject = (
  defaultTreeData = [],
  talentTreeData = [],
  defaultKeys = [],
  talentKeys = []
) => {
  const currentTalentKeys = talentTreeData.map((i) => i.key);
  const currentDefaultKeys = defaultTreeData.map((i) => i.key);
  if (currentDefaultKeys.length > currentTalentKeys.length) {
    defaultTreeData.forEach((obj1, index) => {
      const talentObj = talentTreeData.find((o) => o.key === obj1.key);
      if (!talentObj) {
        if (talentKeys.includes(obj1.key)) {
          talentTreeData = filterTreeData(talentTreeData, obj1.key);
        }
        talentTreeData.splice(index, 0, obj1);
      }
    });
  } else if (currentDefaultKeys.length < currentTalentKeys.length) {
    const filterPKeys = currentTalentKeys.filter((item) => {
      if (currentDefaultKeys.includes(item) === false) {
        return true;
      }
      return false;
    });
    if (filterPKeys.length > 0) {
      for (let index = 0; index < talentTreeData.length; index++) {
        const item = talentTreeData[index];
        const defaultObj = defaultTreeData.find((o) => o.key === item.key);
        if (defaultObj) {
          const defaultIndex = defaultTreeData.findIndex(
            (item1) => item1.key === item.key
          );
          if (
            Object.keys(item).includes("children") &&
            item.children.length > 0 &&
            Object.keys(defaultTreeData[defaultIndex]).includes("children") &&
            defaultTreeData[defaultIndex].children.length > 0
          ) {
            item.children = updateObject(
              defaultTreeData[defaultIndex].children,
              item.children,
              defaultKeys,
              talentKeys
            );
          }
        } else if (
          filterPKeys.includes(item.key) &&
          defaultKeys.includes(item.key)
        ) {
          talentTreeData[index] = {};
        }
      }
    }
    const filterdefault = currentDefaultKeys.filter((item) => {
      if (currentTalentKeys.includes(item) === false) {
        return true;
      }
      return false;
    });
    if (filterdefault.length > 0) {
      for (const q of filterdefault) {
        const defaultItemIndex = defaultTreeData.findIndex((k) => k.key === q);
        talentTreeData.splice(
          defaultItemIndex,
          0,
          defaultTreeData[defaultItemIndex]
        );
      }
    }
  } else if (currentDefaultKeys.length === currentTalentKeys.length) {
    for (let index = 0; index < defaultTreeData.length; index++) {
      const obj2 = talentTreeData.find(
        (o) => o.key === defaultTreeData[index].key
      );
      if (obj2) {
        let indexObj2 = talentTreeData.indexOf(obj2);
        if (index !== indexObj2) {
          talentTreeData.splice(indexObj2, 1);
          talentTreeData.splice(index, 0, obj2);
          indexObj2 = index;
        }
        if (
          Object.keys(defaultTreeData[index]).includes("children") &&
          defaultTreeData[index].children.length > 0
        ) {
          talentTreeData[indexObj2].children = updateObject(
            defaultTreeData[index].children,
            talentTreeData[indexObj2].children,
            defaultKeys,
            talentKeys
          );
        }
      } else {
        talentTreeData.splice(index, 0, defaultTreeData[index]);
      }
    }
  }

  return talentTreeData;
};
