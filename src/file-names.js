const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  console.log('==============\n', names);
  let namesObj = {};
  let resArr = [];

  // names.forEach((name) => {
  //   // if () {

  //   // }
  //   if (!resArr.includes(name)) {
  //     resArr.push(name);
  //   } else {
      
  //     const lastMatch = resArr.find((el) => {
  //       const reg = new RegExp(name + '(1)');
  //       console.log(reg);
  //       console.log(el.match(`/[0-9]/g`));
  //       console.log(el.match(reg));
  //       //return 
  //     });
  //     resArr.push(name + '(' + '1' + ')');
  //   }
  // })

  names.forEach((name, i) => {
    if (!resArr.includes(name)) {
      resArr.push(name);
      namesObj[name] = 1;
    } else {
        if (!namesObj[name]) {
          namesObj[name] = 1;
        }
        resArr.push(name + `(${namesObj[name]})`);
        namesObj[name] += 1;
      }

  })

  console.log(resArr);
  return resArr;
}

module.exports = {
  renameFiles
};
