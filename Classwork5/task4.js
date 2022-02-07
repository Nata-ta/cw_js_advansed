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

    if (i === i.toUpperCase()) {
      if (numb + num >= 90) {
        testNumber = (65 + num) - (numb + num - 90);
      }
    } else if (i === i.toLowerCase()) {
      if (numb + num >= 122) {
        testNumber = (97 + num) - (numb + num - 122);
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
    var testNum = crept - num;;

    if (i === i.toUpperCase()) {
      if (crept - num < 65) {
        testNum = (90 + num) - (crept + num - 65);
      }
    } else if (i === i.toLowerCase()) {
      if (crept - num < 97) {
        testNum = (122 + num) - (crept + num - 97);
      }
    }

    var lit = String.fromCharCode(testNum);

    return lit;

  });

  console.log(encrept.join(''));

};

changeElem('xyz', 3);
deShifrStr('def', 3);