export const getKeys = (arr) => {
    let list = [];
    if (Array.isArray(arr) && arr.length > 0) {
      for (const k of arr) {
        list.push(k.key);
        if (Object.keys(k).includes("children")) {
          list = list.concat(getKeys(k.children));
        }
      }
    }
    return list;
  };