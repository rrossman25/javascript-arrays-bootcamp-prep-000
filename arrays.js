var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, elem){
  let newArr = [elem, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, elem){
  arr.unshift(elem);
}