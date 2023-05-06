export const filterTreeData = (treeData, key) =>
  treeData.filter((obj) => {
    if (obj.key === key) {
      return false;
    }
    if (obj.children && obj.children.length > 0) {
      obj.children = filterTreeData(obj.children, key);
    }
    return true;
  });
