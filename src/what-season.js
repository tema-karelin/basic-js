const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  // проверка существует ли аргумент
  if (!date) return 'Unable to determine the time of year!';

  // проверка на валидность
  if (isNaN(Date.parse(date)) 
      || !date instanceof Date || Object.entries(date).length > 0
      ) {
        throw new Error("Invalid date!");
  };

  let month = date.getMonth();

  //проверка аргумента на строку, если это строка и 'winter', 'spring', 'summer' или 'autumn' то вернуть аргумент
  // if (typeof date == 'string' && (date == 'winter' || date == 'spring' || date == 'summer' || date == 'autumn')) return date;

  switch (month) {
    case 0:
    case 1:
    case 11:
      return 'winter';
      break;

    case 2:
    case 3:
    case 4:
      return 'spring';
      break;
    
    case 5:
    case 6:
    case 7:
      return 'summer';
      break;
    
    case 8:
    case 9:
    case 10:
      return 'autumn';
      break;

    default: 
      return date;
      break;
  }
  
  
}

module.exports = {
  getSeason
};
