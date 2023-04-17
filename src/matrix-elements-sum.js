const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  console.log(matrix);
  let sum = 0;
  let newMatrix = [];
  for (let i=0; i<matrix[0].length; i++) {
    newMatrix.push([]);
  }
  for (let i=0; i<matrix.length; i++) {
    for (let j=0; j<matrix[i].length; j++) {
      newMatrix[j].push(matrix[i][j]);
    }
  }
  console.log(newMatrix);
  const result = newMatrix.reduce((sum, el) => {
    let elSum = 0;
    let i = 0;
    while (el[i] !== 0 && i<el.length) {
      elSum += el[i];
      i++;
    }
    console.log('el: ', el);
    console.log('sum: ', elSum);
    return sum + elSum;
  }, 0)
  console.log(result);
  return result;
}

module.exports = {
  getMatrixElementsSum
};
