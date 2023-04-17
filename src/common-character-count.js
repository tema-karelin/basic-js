const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  //console.log('s1: ', s1, ', s2: ', s2);

  const strArr1 = s1.split('');
  const strArr2 = s2.split('');
  //console.log(strArr1);
  //console.log(strArr2);

  const Arr1_UniqueSymbols = {};
  const Arr2_UniqueSymbols = {};
  
  strArr1.forEach((el) => {
    if (Arr1_UniqueSymbols[el] === undefined) {
      Arr1_UniqueSymbols[el] = 1;
    } else {
      Arr1_UniqueSymbols[el] += 1;
    }
  });
  strArr2.forEach((el) => {
    if (Arr2_UniqueSymbols[el] === undefined) {
      Arr2_UniqueSymbols[el] = 1;
    } else {
      Arr2_UniqueSymbols[el] += 1;
    }
  });

  //console.log('1: ', Arr1_UniqueSymbols);
  //console.log('2: ', Arr2_UniqueSymbols);

  let common = 0;
  for (letter in Arr1_UniqueSymbols) {
    //console.log("for: ", letter);
    if (Arr2_UniqueSymbols[letter] > 0) {
      common += Arr1_UniqueSymbols[letter] <= Arr2_UniqueSymbols[letter] ? Arr1_UniqueSymbols[letter] : Arr2_UniqueSymbols[letter];
    }
    //console.log("common: ", common);
  }
  return common;
}

module.exports = {
  getCommonCharacterCount
};
