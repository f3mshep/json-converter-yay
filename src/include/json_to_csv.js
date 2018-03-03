
function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

function myType(obj){
  return Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
}


//cite stack overflow
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

function toJsonArr(json) {
  let queue = [], next = json, lookahead;

  while(queue){
    if(myType(next)==='array' && next.length > 0){
      lookahead = next[0];
      if (myType(lookahead)=== 'array' || myType(lookahead) == 'object' ) return next;
    }
    else if(myType(next)==='object'){
      for(let key in next){
        queue.push(next[key]);
      }
    }
    next = queue.shift();
  }
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

function extractHeaders(flatObj){
  let header;
  let headers = {}
  for(let key in flatObj){
    header = flatObj[key];
    header.replace(/.\d\//, "");
    headers[header] = true;
  }
  return headers;
}

function toCSV(objects){
  jsonArr = toJsonArr(objects);
  flatObj = flattenObj(jsonArr);
  rows = extractRows(flatObj);
  headers = extractHeaders(rows);
  return finalPass(rows, headers);
}

function findHeader(key){
  return key.replace(/\d+\//, "");
}

function findIndex(key){
  return key.split('/')[0]
}

function extractRows(flatObj){
  let rows = [], index, rowHash;
  for(let key in flatObj){
    index = findIndex(key);
    header = findHeader(key);
    if (rows[index]){
      rowHash = rows[index];
      rowHash[header] = flatObj[key];
    }
    else {
      rows[index] = {};
      rowHash = rows[index];
      rowHash[header] = flatObj[key];
    }
  }
  return rows;
}

function extractHeaders(rows){
  let count = 0, longest, currentRow;
  for(let rowKey in rows){
    currentRow = rows[rowKey];
    if(Object.keys(currentRow).length > count){
      count = Object.keys(currentRow).length;
      longest = currentRow;
    }
  }
  return Object.keys(longest);
}


function finalPass(rows, headers){
  final = headers.join(',');
  for(let rowHash of rows){
    final = final + "\n";
    for(let header of headers){
      if (rowHash[header]){
        final = final + rowHash[header] + ',';
      }
      else {
        final = final + ',';
      }
    }
  }
  return final;
}

export default toCSV;