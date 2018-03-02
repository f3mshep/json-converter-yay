
function parseObj(obj){

}

function isObject(obj){
  return (obj && typeof item === 'object' && !Array.isArray(obj));
};

function findType(item){
  if (isNaN(item)) return 'NaN';
  if (item == null) return 'null';
  if (Array.isArray(item)) return 'array';
  return typeof item;
};

// Deep Merge without jQuery https://stackoverflow.com/questions/38345937/object-assign-vs-extend
function mergeDeep(target, ...sources){
  if (!sources.length) return target;
  //take the first element off the queue
  const source = sources.shift();

};
