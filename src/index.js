
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let array = matrix;

  if (array === undefined) 
    return [];
  let newArray = [];
 

  for (let i=0; i < array.length; i++) {
    if ( i % 2 === 1) {
      array[i] = array[i].reverse();
    } 
    newArray = newArray.concat(array[i]);
  }
  console.log(newArray);
  return newArray;
}

module.exports(undefined);