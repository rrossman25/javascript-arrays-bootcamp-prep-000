var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, elem){
  let newArr = [elem, ...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, elem){
  return arr.unshift(elem);
}

function addElementToEndOfArray(arr, elem){
  let newArr = [...arr, elem];
  return newArr;
}

function destructivelyAddElementToEndOfArray(arr, elem){
  return arr.push(elem);
}

function accessElementInArray(arr, idx){
  return arr[idx];
}

function destructivelyRemoveElementFromBeginningOfArray(arr, elem){
  return arr.shift();
}

function removeElementFromBeginningOfArray(arr){
  return arr = arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arr, elem){
  return arr.pop();
}

function removeElementFromEndOfArray(arr){
  return arr = arr.slice(0, arr.length - 1);
}
