const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // проверка, является ли аргумент массивом  
  if (!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }

  let transformedArr = [];
  let discardNext = false;

  arr.forEach((element, i, initialArr) => {
    switch (element) {
      case '--discard-next':
        if (i != initialArr.length - 1) {
          discardNext = true;
        }
        break;
      case '--discard-prev':
        if (initialArr[i-2] !== '--discard-next' && i != 0) {
          transformedArr.pop();
        }
        break;
      case '--double-next':
        if (i != initialArr.length - 1) {
          transformedArr.push(initialArr[i+1]);
        }
        break;
      case '--double-prev':
        if (initialArr[i-2] !== '--discard-next' && i != 0) {
          transformedArr.push(initialArr[i-1]);
        }
        break;
      default:
        if (discardNext == false) {
          transformedArr.push(element);
        } else if(discardNext) {
          discardNext = false;
        }
        break;
    }
  });
  return transformedArr;

}

module.exports = {
  transform
};
