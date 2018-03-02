
function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  return mergeDeep(target, ...sources);
}

function flattenObj(obj, loc){
  //flatten array using depth first recursive approach
  //inspired by
  if (loc === undefined){
    loc = ""
  }
  if(isObject(obj) || Array.isArray(obj)){
    let data = {}
    for(let key in obj){
      let more_data = flattenObj(obj[key], loc + key + "/")
      data = mergeDeep(data, more_data)
    }
    return data
  }
  else{
    data = {}
    endLoc = loc.substring(0, loc.length - 1)
    data[endLoc] = obj
    return data
  }
}
