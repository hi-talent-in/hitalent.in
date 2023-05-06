export function removeEmptyObject(arr) {
    return arr.filter(function (obj) {
      if (Object.keys(obj).length === 0) {
        return false; // remove empty objects from the array
      }
      for (let key in obj) {
        if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
          if (
            Object.keys(obj[key]).length === 0 ||
            !removeEmptyObject([obj[key]]).length
          ) {
            delete obj[key]; // remove empty nested objects
          }
        } else if (Array.isArray(obj[key])) {
          obj[key] = removeEmptyObject(obj[key]); // recursively remove empty objects from arrays
          if (obj[key].length === 0) {
            delete obj[key]; // remove empty arrays
          }
        }
      }
      return true; // keep non-empty objects in the array
    });
  }