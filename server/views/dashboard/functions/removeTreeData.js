export const removeTreeData = (treeData, removeItem) =>
  treeData.filter((obj) => {
    const title = Object.keys(obj).includes("title") ? obj.title : null;
    if (title && title.toLowerCase() === removeItem) {
      return false;
    }
    if (obj.children && obj.children.length > 0) {
      obj.children = removeTreeData(obj.children, removeItem);
    }
    return true;
  });