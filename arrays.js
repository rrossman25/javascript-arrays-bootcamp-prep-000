var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, elem){
  let newArr = [elem, ...arr];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(arr, elem){
  arr = arr.unshift(elem);
  return arr;
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
   arr = arr.slice(1);
   return arr;
}

function destructivelyRemoveElementFromEndOfArray(arr, elem){
  console.log(arr);
  arr1 = arr.pop();
  console.log(arr1);
  return arr;
}

function removeElementFromEndOfArray(arr){
  arr = arr.slice(0, arr.length - 1);
  return arr;
}


destructivelyRemoveElementFromEndOfArray([1,2,3]);