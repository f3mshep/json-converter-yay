const DELIMITER = "___";

function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

function myType(obj){
  return Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
}


// Deep merge implementation in vanilla JS
// https://stackoverflow.com/questions/38777297/how-to-use-extend-in-vanilla-js
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
      if (myType(lookahead)=== 'array' || myType(lookahead) === 'object' ) return next;
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
  //inspired by https://github.com/onyxfish/csvkit/blob/61b9c208b7665c20e9a8e95ba6eee811d04705f0/csvkit/convert/js.py#L15-L34

  if (loc === undefined){
    loc = ""
  }
  if(isObject(obj) || Array.isArray(obj)){
    let data = {}
    for(let key in obj){
      let more_data = flattenObj(obj[key], loc + key + DELIMITER);
      data = mergeDeep(data, more_data);
    }
    return data;
  }
  else{
    let data = {}
    let endLoc = loc.substring(0, loc.length - DELIMITER.length);
    data[endLoc] = obj;
    return data;
  }
}

function toCSV(objects){
  const jsonArr = toJsonArr(objects);
  const flatObj = flattenObj(jsonArr);
  const rows = extractRows(flatObj);
  const headers = extractHeaders(rows);
  return finalPass(rows, headers);
}

function findHeader(key){
  return key.replace(/\d+___/, "");
}

function findIndex(key){
  return key.split(DELIMITER)[0];
}

function stripNewline(str){
  if (typeof str === "string"){
    return str.replace(/\r?\n|\r/g, "");
  }
}

function extractRows(flatObj){
  let rows = [], rowHash;
  for(let key in flatObj){
    const index = findIndex(key);
    const header = findHeader(key);
    if (rows[index] === undefined){
      rows[index] = {};
    }
    rowHash = rows[index];
    rowHash[header] = stripNewline(flatObj[key]);
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
  let final = headers.join(',');
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
