
export function updateValue(object, key, value) {
    if (object.key === key) {
      object.title = value;
      return object;
    } else if (object.children) {
      for (let i = 0; i < object.children.length; i++) {
        const result = updateValue(object.children[i], key, value);
        if (result) {
          return object;
        }
      }
    }
    return null;
  }