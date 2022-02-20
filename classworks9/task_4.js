/*
  Задание:
  Скопировать текст из файла RegExp.txt на сайт https://regexr.com/
  Написать регулярное выражение которое найдет:
    1. Все слова. 
    2. Все совпадения букв от a до e,
    3. Года, например 2004
    4. Слова обернутые в [квадратныеКавычки]
    5. Все форматы файлов .jpg / .png / .gif
    6. Все email com.ua
    7. Все слова написанные с большой буквы
    8. Найти телефон написаный по паттерну +00 (000) 000-00-00, 
       где вместо 0 может быть любое число
*/

let stringText = `
  RegExr was created by gskinner.com, and is proudly hosted by Media Temple.
  Edit the Expression & Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode.
  The side bar includes a Cheatsheet, full Reference, and Help. You can also Save & Share with the Community, and view patterns you create or favorite in My Patterns.
  Explore results with the Tools below. Replace & List output custom results. Details lists capture groups. Explain describes your expression in plain English.
`;

//1. Все слова.

let allWords = /\w+/g;
let wordsResult = stringText.match(allWords);
console.log(wordsResult);

//2. Все совпадения букв от a до e,

let aeWords = /[a-e]/g;
let aeResult = stringText.match(aeWords);
console.log(aeResult);

//3. Года, например 2004

let years = /\d{4}/g;
let yearsResult = stringText.match(years);
console.log(yearsResult);

//Слова обернутые в [квадратныеКавычки]

let wordsInSquare = /\[\w+\]/g;
let wordsInSquareResult = stringText.match(wordsInSquare);
console.log(wordsInSquareResult);

//5. Все форматы файлов .jpg / .png / .gif 

let allImages = /\.jpg\.png\.gif/g;
let allImagesResult = stringText.match(allImages);
console.log(allImagesResult);

//6. Все email com.ua

let email = /(\b\w*)@(\w+\.\w+\b)/g;
let allemailResult = stringText.match(email);
console.log(allemailResult);

//7. Все слова написанные с большой буквы

let capitalLeterWord = /[A-Z]\w+/g;
let capitalLeterWordResult = stringText.match(capitalLeterWord);
console.log(capitalLeterWordResult);

//8. Найти телефон написаный по паттерну +00 (000) 000-00-00, где вместо 0 может быть любое число

let phoneNumber = /\+\d{2}\s\(\d{3}\)\s\d{3}\-\d{2}\-\d{2}/g;
let phoneNumberResult = stringText.match(phoneNumber);
console.log(phoneNumberResult);