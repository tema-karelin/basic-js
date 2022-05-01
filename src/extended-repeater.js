const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 */
//  str: is a string to repeat;
//  options: is an object of options, that contains properties:
// {
//  repeatTimes: sets the number of repetitions of the str;
//  separator: is a string separating repetitions of the str;
//  addition: is an additional string that will be added to each repetition of the str;
//  additionRepeatTimes: sets the number of repetitions of the addition;
//  additionSeparator: is a string separating repetitions of the addition
// }
function repeater(str, options) {
  let newStrArr = [];
  if (str === undefined) str = '';
  if (options.addition === undefined) options.addition = '';
  if (!options.separator) options.separator = "+";
  if (!options.additionSeparator) options.additionSeparator = "|";
  if (!options.repeatTimes) options.repeatTimes = 1;
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 0;



  if (options.repeatTimes) {
    for (let i=0; i< options.repeatTimes; i++) {
      let customizedStr = [];
      // customizedStr.push("" + str);
      customizedStr.push("" + str + options.addition);
      // второй цикл для создания элемента
      if (options.additionRepeatTimes) {
        for (let j=0; j< options.additionRepeatTimes; j++) {
          if (j != 0) {
            customizedStr.push("" + options.addition);
          }
        }
      }
      newStrArr.push(customizedStr.join(options.additionSeparator))
    }
  }
  return newStrArr.join(options.separator);
}

module.exports = {
  repeater
};
