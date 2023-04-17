const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sortedArr = [];
  sortedArr.length = arr.length;
  let arrOnlyHeight = [];
  for (let i = 0; i<arr.length; i++) {
    sortedArr[i] = arr[i] === -1 ? -1 : undefined;
    if (arr[i] === -1) {
      sortedArr[i] = -1;
    } else {
      arrOnlyHeight.push(arr[i]);
    }
  }

  console.log('sortedArr: ', sortedArr);
  console.log('arrOnlyHeight: ', arrOnlyHeight);

  arrOnlyHeight.sort((a,b) => (a-b));

  console.log('arrOnlyHeight after sorting: ', arrOnlyHeight);
  
  for (let i = sortedArr.length-1; i>=0; i--) {
    console.log('i: ', i);
    if (sortedArr[i] === undefined) {
      sortedArr[i] = arrOnlyHeight[arrOnlyHeight.length - 1];
      arrOnlyHeight.pop();
      console.log('\naction!!');
      console.log('sortedArr: ', sortedArr);
      console.log('arrOnlyHeight: ', arrOnlyHeight);
    }
  }

  return sortedArr
}

module.exports = {
  sortByHeight
};
