/*
@task list
% Count cats!
% Carbon dating
% Dream team
% What season?
% Tower of Hanoi
^ Transform array
^ Chain maker
^ Recursive depth calculator
^ Extended repeater
^ Vigenere cipher
^ (ST) Common character count
^ (ST) Delete digit
^ (ST) DNS stat
^ (ST) Encode line
^ (ST) File names
^ (ST) Get email domain
^ (ST) Is MAC-48 Adress?
^ (ST) Matrix elements sum
^ (ST) Minesweeper
^ (ST) Sort by height
^ (ST) Sum digits
*/

const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // const MODERN_ACTIVITY = 15;
  // const HALF_LIFE_PERIOD = 5730;
  if (!Number(sampleActivity) || (typeof sampleActivity)!="string" || Number(sampleActivity) > 15 || Number(sampleActivity) <= 0 ) {return false};
  return Math.ceil((Math.log((MODERN_ACTIVITY/sampleActivity))/(Math.log(2)/HALF_LIFE_PERIOD)));
}

module.exports = {
  dateSample
};
