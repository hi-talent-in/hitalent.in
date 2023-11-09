export const getProgress = (obj) => {
  let progressList = [];
  if (Object.keys(obj).includes("children") && obj.children.length > 0) {
    for (let x of obj.children) {
      if (Object.keys(x).includes("children") && x.children.length > 0) {
        progressList = progressList.concat(getProgress(x));
      } else {
        let data = {};
        data[x.key] = x.progress;
        progressList.push(data);
      }
    }
  } else {
    let data = {};
    data[obj.key] = obj.progress;
    progressList.push(data);
  }
  return progressList;
};