const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(notReverse) {
    this.notReverse = notReverse; 
  }
  encrypt(text, cipher) {
    //проверка аргументов 
    if (text === undefined || cipher === undefined) throw new Error('Incorrect arguments!');

    // делаем текст заглавными буквами
    // посимвольно разбиваем на массив из кодов Юникод для каждого символа
    // а так же делаем массив со всеми символами, кроме латинских букв с указанием позиции в строке
    let notLetterArr = [];
    let upperText = text.toUpperCase();
    console.log("upperText: ", upperText);
    let unicodeArr = upperText.split('').map((el, i) => {
      let code = el.charCodeAt(0)
      // заглавные латинские буквы по юникоду от 65 (A) до 90 (Z) 
      if (code < 65 || code > 90) {
        notLetterArr.push([i, code]);
        return [];
      } else {
        return code;
      };
    }).flat()
    console.log("unicodeArr: ", unicodeArr);

    // то же самое для cipher
    // + дополняем chipher массив до длины строки, которую будем кодировать
    let cipherUnicodeArr = cipher.toUpperCase().split('').map(el => el.charCodeAt(0));
    if (unicodeArr.length > cipherUnicodeArr.length) {
      let addIndex = 0;
      while (unicodeArr.length !== cipherUnicodeArr.length) {
        cipherUnicodeArr.push(cipherUnicodeArr[addIndex]);
        addIndex +=1;
      }
    }
    console.log("cipherUnicodeArr: ", cipherUnicodeArr);


    // * сама функция кодирования
    // @ n - количество букв в алфавите
    // @ M - номер буквы открытого текста (нешифрованного)
    // @ K - номер буквы ключа в алфавите
    // @ C - номер буквы зашиврованного текста
    //^ шифрование
    // @ С = (M + K) mod(n)
    //^ декодирование
    // @ M = (C - K) mod(n)
    let vizhenerUnicodeArr = [];
    unicodeArr.forEach((symbol, ind) => {
      // (M + K)
      let mkSumMod = (symbol-64) + (cipherUnicodeArr[ind]-64);
      console.log("mkSumMod before mod26: ", mkSumMod);
      // (M + K) mod(n)
      (mkSumMod)<=26 ? mkSumMod = (mkSumMod-1) : mkSumMod = (mkSumMod%26 -1);
      console.log("mkSumMod: ", mkSumMod);
      // C
      // С + 64 - номер по юникоду
      let cyberedSymbol = 64 + mkSumMod;
      console.log("cyberedSymbol: ", cyberedSymbol);
      vizhenerUnicodeArr.push(cyberedSymbol);
    });
    console.log('vizhenerUnicodeArr: ', vizhenerUnicodeArr);

    // вставляем символы (не латинские буквы) из исходного массива в итоговый из массива notLetterArr
    notLetterArr.forEach((el,i) => {
      // индекс, на котором должен находиться символ
      // == равен индексу элемента в итоговом массиве, перед которым нужно вставить символ
      let symbolIndex = el[0];
      // юникод символа
      let symbolUnicode = el[1];
      
      // идем по массиву слева направо ===>, поэтому вставляем по порядку
      vizhenerUnicodeArr.splice(symbolIndex, 0, symbolUnicode);
    });
    console.log('vizhenerUnicodeArr with symbols: ', vizhenerUnicodeArr);

    let codedArr = vizhenerUnicodeArr.map(el => String.fromCharCode(el));
    console.log("codedArr: ", codedArr);

    if (this.notReverse === false) {
      codedArr.reverse();
      console.log("codedArr was reversed: ", codedArr);
    };

    return codedArr.join('');

  }
  decrypt(text, cipher) {
    //проверка аргументов 
    if (text === undefined || cipher === undefined) throw new Error('Incorrect arguments!');

    // делаем текст заглавными буквами
    // посимвольно разбиваем на массив из кодов Юникод для каждого символа
    // а так же делаем массив со всеми символами, кроме латинских букв с указанием позиции в строке
    let notLetterArr = [];
    let upperText = text.toUpperCase();
    console.log("upperText: ", upperText);
    let unicodeArr = upperText.split('').map((el, i) => {
      let code = el.charCodeAt(0)
      // заглавные латинские буквы по юникоду от 65 (A) до 90 (Z) 
      if (code < 65 || code > 90) {
        notLetterArr.push([i, code]);
        return [];
      } else {
        return code;
      };
    }).flat()
    console.log("unicodeArr: ", unicodeArr);

    // то же самое для cipher
    // + дополняем chipher массив до длины строки, которую будем кодировать
    let cipherUnicodeArr = cipher.toUpperCase().split('').map(el => el.charCodeAt(0));
    if (unicodeArr.length > cipherUnicodeArr.length) {
      let addIndex = 0;
      while (unicodeArr.length !== cipherUnicodeArr.length) {
        cipherUnicodeArr.push(cipherUnicodeArr[addIndex]);
        addIndex +=1;
      }
    }
    console.log("cipherUnicodeArr: ", cipherUnicodeArr);


    // * сама функция кодирования
    // @ n - количество букв в алфавите
    // @ M - номер буквы открытого текста (нешифрованного)
    // @ K - номер буквы ключа в алфавите
    // @ C - номер буквы зашиврованного текста
    //^ шифрование
    // @ С = (M + K) mod(n)
    //^ декодирование
    // @ M = (C - K) mod(n)
    let vizhenerUnicodeArr = [];
    unicodeArr.forEach((symbol, ind) => {
      // (M + K)
      let mkSumMod = (symbol-64) - (cipherUnicodeArr[ind]-64);
      console.log("mkSumMod before mod26: ", mkSumMod);
      // (M + K) mod(n)
      if (mkSumMod<0) {
        mkSumMod = (26 + mkSumMod + 1);
      } else {
        mkSumMod = (mkSumMod+1);
      };
      // (mkSumMod)>0 ? mkSumMod = (mkSumMod+1) : mkSumMod = (26 + mkSumMod + 1);
      console.log("mkSumMod: ", mkSumMod);
      // C
      // С + 64 - номер по юникоду
      let cyberedSymbol = 64 + mkSumMod;
      console.log("cyberedSymbol: ", cyberedSymbol);
      vizhenerUnicodeArr.push(cyberedSymbol);
    });
    console.log('vizhenerUnicodeArr: ', vizhenerUnicodeArr);

    // вставляем символы (не латинские буквы) из исходного массива в итоговый из массива notLetterArr
    notLetterArr.forEach((el,i) => {
      // индекс, на котором должен находиться символ
      // == равен индексу элемента в итоговом массиве, перед которым нужно вставить символ
      let symbolIndex = el[0];
      // юникод символа
      let symbolUnicode = el[1];
      
      // идем по массиву слева направо ===>, поэтому вставляем по порядку
      vizhenerUnicodeArr.splice(symbolIndex, 0, symbolUnicode);
    });
    console.log('vizhenerUnicodeArr with symbols: ', vizhenerUnicodeArr);

    let codedArr = vizhenerUnicodeArr.map(el => String.fromCharCode(el));
    console.log("codedArr: ", codedArr);
    if (this.notReverse === false) {
      codedArr.reverse();
      console.log("codedArr was reversed: ", codedArr);
    };

    return codedArr.join('');

  }
}

module.exports = {
  VigenereCipheringMachine
};
