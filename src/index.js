module.exports = function towelSort (matrix) {
  let i = 0;
  let arr1 = [];
  let arr2 = [];
  if(matrix != undefined){
    while(i < matrix.length){
      arr2 = matrix[i];
      if(i % 2 != 0){
        arr2 = arr2.reverse()
      }
      arr1 = arr1.concat(arr2);
      i++;
    }
  }
  return arr1;
}
