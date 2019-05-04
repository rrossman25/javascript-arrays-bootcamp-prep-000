var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, elem){
  let newArr = [elem, ...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, elem){
  let newArr = arr.unshift(elem);
  return newArr;
}

function addElementToEndOfArray(arr, elem){
  let newArr = [...arr, elem];
  return newArr;
}

function destructivelyAddElementToEndOfArray(arr, elem){
  let newArr = arr.shift(elem);
  return newArr;
}