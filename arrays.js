var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, elem){
  let newArr = [elem, ...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, elem){
 return arr.unshift(elem);
}