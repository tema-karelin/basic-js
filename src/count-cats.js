const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(cats) {
  let catsCount = 0;
  cats.flat(Infinity).forEach(element => {
    (element === '^^') ? catsCount+=1 : true;
  });
  return catsCount;
  // return cats;
}

module.exports = {
  countCats
};
