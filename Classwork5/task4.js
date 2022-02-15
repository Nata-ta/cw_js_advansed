/*

  Задание "Шифр цезаря":

    https://uk.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F

    Написать функцию, которая будет принимать в себя слово и количество
    симовлов на которые нужно сделать сдвиг внутри.

    Написать функцию дешефратор которая вернет слово в изначальный вид.

    Сделать статичные функции используя bind и метод частичного
    вызова функции (каррирования), которая будет создавать и дешефровать
    слова с статично забитым шагом от одного до 5.


    const isMobile = document.innerWidth < 768;

    Например:
      encryptCesar( 3, 'Word');
      encryptCesar1(...)
      ...
      encryptCesar5(...)

      decryptCesar1(3, 'Sdwq');
      decryptCesar1(...)
      ...
      decryptCesar5(...)

      "а".charCodeAt(); // 1072
      String.fromCharCode(189, 43, 190, 61) // ½+¾

*/

function changeElem(str, num) {
  var arrOfStr = str.split('');

  var encrept = arrOfStr.map(i => {
    var numb = i.charCodeAt();
    var testNumber = numb + num;
    const firstUpperCaseIndex = 65;
    const lastUpperCaseIndex = 90;
    const firstLowerCaseIndex = 97;
    const lastLowerCaseIndex = 122;

    if (i === i.toUpperCase()) {
      if (numb + num >= lastUpperCaseIndex) {
        testNumber = (firstUpperCaseIndex + num) - (numb + num - lastUpperCaseIndex);
      }
    } else if (i === i.toLowerCase()) {
      if (numb + num >= lastLowerCaseIndex) {
        testNumber = (firstLowerCaseIndex + num) - (numb + num - lastLowerCaseIndex);
      }
    }

    var lit = String.fromCharCode(testNumber);

    return lit;
  });

  console.log(encrept.join(''));
};

function deShifrStr(str, num) {
  var arrOfStr = str.split('');

  var encrept = arrOfStr.map(i => {
    var crept = i.charCodeAt();
    var testNum = crept - num;
    const firstUpperCaseIndex = 65;
    const lastUpperCaseIndex = 90;
    const firstLowerCaseIndex = 97;
    const lastLowerCaseIndex = 122;

    if (i === i.toUpperCase()) {
      if (crept - num < firstUpperCaseIndex) {
        testNum = (lastUpperCaseIndex + num) - (crept + num - firstUpperCaseIndex);
      }
    } else if (i === i.toLowerCase()) {
      if (crept - num < firstLowerCaseIndex) {
        testNum = (lastLowerCaseIndex + num) - (crept + num - firstLowerCaseIndex);
      }
    }

    var lit = String.fromCharCode(testNum);

    return lit;

  });

  console.log(encrept.join(''));

};

changeElem('xyz', 3);
deShifrStr('def', 3);