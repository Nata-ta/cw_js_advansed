/*

    Задание 1:
    Написать скрипт, который по клику на кнопку рандомит цвет и записывает его в localStorage
    После перезагрузки страницы, цвет должен сохранится.

*/

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var changeColor = function () {
    var red = getRandomIntInclusive(0, 255);
    var green = getRandomIntInclusive(0, 255);
    var blue = getRandomIntInclusive(0, 255);

    let color = 'rgb(' + red + ',' + green + ',' + blue + ')';

    localStorage.setItem('bgColor', color);

    document.body.style.background = color;
}

let btn = document.createElement('button');
btn.innerText = 'Random color';
btn.addEventListener('click', changeColor);

document.body.appendChild(btn);

let colorFromLocalStorage = localStorage.getItem('bgColor');

if (colorFromLocalStorage !== null) {
    document.body.style.background = colorFromLocalStorage;
}