const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  console.log(matrix);
  let resArr = [];
  for (let i = 0; i<matrix.length; i++) {
    resArr.push([]);
  }
  // console.log(resArr);
  for (let i = 0; i<matrix.length; i++) {
    for (let j = 0; j<matrix[i].length; j++) {
      //console.log('\ni: ', i, 'j: ', j, '\n');
      
      const i_min = (i-1) < 0 ? 0 : i-1;
      const j_min = (j-1) < 0 ? 0 : j-1;
      const i_max = (i+1) < matrix.length ? i+1 : matrix.length - 1;
      const j_max = (j+1) < matrix.length ? j+1 : matrix[i].length - 1;

      //console.log('i_min: ', i_min, 'j_min: ', j_min, 'i_max: ', i_max, 'j_max: ', j_max);

      let sum = 0;
      for (let k=i_min; k<=i_max; k++) {
        for (let l=j_min; l<=j_max; l++) {
          //console.log(`matrix[${k}][${l}]: `, matrix[k][l]);
          if ((''+k+l)!==(''+i+j) && matrix[k][l]) {
            //console.log('true')
            sum++;
          }
        }
      }

      //let sum = (matrix[i-1][j-1] ? 1 : 0) + (matrix[i-1][j] ? 1 : 0) + (matrix[i-1][j+1] ? 1 : 0) + (matrix[i][j-1] ? 1 : 0) + (matrix[i][j+1] ? 1 : 0) + (matrix[i+1][j-1] ? 1 : 0) + (matrix[i+1][j] ? 1 : 0) + (matrix[i+1][j+1] ? 1 : 0);
      
      //console.log('sum: ', sum);
      resArr[i].push(sum);
    }
  }
  console.log('resArr', resArr);
  return resArr
}

module.exports = {
  minesweeper
};
