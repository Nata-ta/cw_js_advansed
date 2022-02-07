/*

    Задание 3:

    1. Создать ф-ю констурктор которая создаст новую собаку у которой есть имя и порода
    2. Обьект должен иметь пару свойств (Имя, порода, status)
    3. Функцию которая производит манипуляцию со свойствами (Собака бежит), (Собака есть)
    4. Функция которая перебором выводит все свойства

    Dog {
      name: '',
      name: '',
      status: 'idle',

      changeStatus: function(){...},
      showProps: function(){...}
    }

    // Перебор свойств и методов обьекта
    for (key in obj) {
      console.log( key, obj[key] );
      /* ... делать что-то с obj[key] ...
    // }
*/

function Animal(name, breed, status) {
  this.name = name;
  this.breed = breed;
  this.status = status;
  this.changeStatus = function (par) {
    this.status = par;
    console.log(`${this.name} ${this.status}`)
  }
  this.showProps = function () {
    for (keys in this) {
      console.log(keys);
    }
  }
}

var dog = new Animal('dog', 'big', 'run');