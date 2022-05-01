const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    this.chainArr.push("" + value);
    console.log(this.chainArr);
    return this;
  },
  removeLink(position) {
    if (position == undefined || !Number.isInteger(position) || this.chainArr[position-1] == undefined ) {
      this.chainArr = [];
      throw new Error("You can\'t remove incorrect link!");
    } else {
      this.chainArr.splice(position-1, 1);
      console.log(this.chainArr);
      return this;
    };
  },
  reverseChain() {
    this.chainArr = this.chainArr.reverse();
    console.log(this.chainArr);
    return this;
  },
  finishChain() {
    this.chain = "( " + this.chainArr.join(" )~~( ") + " )";
    console.log(this.chain);
    this.chainArr = [];
    return this.chain;
  },
  chain: "",
  chainArr: [],
};

module.exports = {
  chainMaker
};
