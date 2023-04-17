const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nString = n.toString();
  for (let i=0; i<nString.length; i++) {
    if (nString[i]<nString[i+1]) return parseInt(nString.slice(0, i) + nString.slice(i+1));
    if (i === nString.length - 1) return parseInt(nString.slice(0, -1));
  }
}

module.exports = {
  deleteDigit
};
