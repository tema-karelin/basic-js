const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, max) {
    if (max == undefined) {max = 1};
    if (arr.some(el => Array.isArray(el))) {
      max +=1;
      max = this.calculateDepth(arr.flat(1), max);
    }
    return max;
  }
}

module.exports = {
  DepthCalculator
};
