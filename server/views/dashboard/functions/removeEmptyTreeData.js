export const removeEmptyTreeData = (treeData, removeItem) =>
  treeData.filter((obj) => {
    if (!Object.keys(obj).includes(removeItem)) {
      return false;
    }
    if (obj.children && obj.children.length > 0) {
      obj.children = removeEmptyTreeData(obj.children, removeItem);
    }
    return true;
  });
