const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {

  // проверка массив ли в аргументе 
  if (arr == 0 || !Array.isArray(arr)) return false;

  // создать массив, все элементы которого - строки
  let onlyStringArr = [];
  arr.forEach(element => {
    // проверка, строка ли
    if (typeof element == 'string') {
      // ~ trim ~
      //^ если строка, то убрать пробелы в начале и конце строки
      // ~ charAt(0) ~ toUpperCase()
      //^ взять только первый символ (0) и преобразовать в заглавную 
      // ~ push ~
      //^ добавить к массиву
      onlyStringArr.push(element.trim().charAt(0).toUpperCase());
    }
  });
  // отфильтровать массив
  return onlyStringArr.sort(function (a, b) {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    // a = b
    return 0;
  }).join('');

  

  // return arr.map(el => {
  //   return el.charAt(0).toUpperCase().sort(el2 => 
  //     );
  // });
}

module.exports = {
  createDreamTeam
};
