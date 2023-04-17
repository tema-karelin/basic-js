const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let str = n.toString().split('');

    // console.log('str: ', str);
    // let sum = str.reduce((acc, el) => {
    //   return Number(acc) + Number(el);
    // }, 0);
    // console.log('sum: ', sum);
    // str = sum.toString().split('');
  
  while (str.length > 1) {
    console.log('str: ', str);
    let sum = str.reduce((acc, el) => {
      return Number(acc) + Number(el);
    }, 0);
    console.log('sum: ', sum);
    str = sum.toString().split('');
  }
  console.log('final STR: ', str);
  console.log('final STR number: ', Number(str.join('')));
  return Number(str.join(''))
}

module.exports = {
  getSumOfDigits
};
