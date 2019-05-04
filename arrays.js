let chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, elem){
  let newArr = arr.unshift(elem);
}

function destructivelyAddElementToBeginningOfArray(arr, elem){
  arr[0] = elem;
}