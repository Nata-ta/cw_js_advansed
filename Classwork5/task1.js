/*

    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/
var Train = {};
Train.name = "Киев - Полтава";
Train.speed = '200 км/ч';
Train.passengers = 156;
Train.go = function () {
    console.log(`Поезд ${this.name} везет ${this.passengers} со скоростью ${this.speed}`);
};
Train.stop = function () {
    console.log(`Поезд ${this.name} остановился. Скорость ${this.speed}`);
};
Train.takePassengers = function (x) {
    return this.passengers + x;
}