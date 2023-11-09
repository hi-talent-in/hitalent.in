export function extractNestedObjects(sourceArray, destinationArray, lang) {
  sourceArray.forEach((item, index) => {
    const title = Object.keys(item).includes("title") ? item.title : null;
    if (title && title.toLowerCase() === lang) {
      destinationArray.push(item);
    } else {
      if (!destinationArray[index]) {
        destinationArray.push({});
      }
      if (item.children) {
        destinationArray[index].children = destinationArray[index].children
          ? destinationArray[index].children
          : [];
        extractNestedObjects(
          item.children,
          destinationArray[index].children,
          lang
        );
      }
    }
  });
}

export function extractNestedObjectsByKey(sourceArray, destinationArray, key) {
  sourceArray.forEach((item, index) => {
    const itemKey = item.key;
    if (itemKey === key) {
      destinationArray.push(item);
    } else {
      if (!destinationArray[index]) {
        destinationArray.push({});
      }
      if (item.children) {
        destinationArray[index].children = destinationArray[index].children
          ? destinationArray[index].children
          : [];
        extractNestedObjectsByKey(
          item.children,
          destinationArray[index].children,
          key
        );
      }
    }
  });
}
