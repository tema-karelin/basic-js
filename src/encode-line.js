const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  console.log('=============\n new string: ', str);
  let strArr = str.split('');
  return strArr.reduce((acc, el) => {
    if (acc.slice(-1) === el) {
      //console.log('reduce is equal: ', acc + el)
      if (!!Number(acc.slice(-2, -1))) {
        console.log('reduce is Number: ', acc.slice(0, -2) + (Number(acc.slice(-2, -1)) + 1) + el);
        return acc.slice(0, -2) + (Number(acc.slice(-2, -1)) + 1) + el;
      } else {
        console.log('reduce is Letter: ', acc.slice(0, -1) + '2' + el)
        return acc.slice(0, -1) + '2' + el;
      }
    } else {
      console.log('reduce not equal: ', acc + el);
      return acc + el;
    }
  }, '')
}

module.exports = {
  encodeLine
};
