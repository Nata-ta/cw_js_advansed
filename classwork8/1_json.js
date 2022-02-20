
/*
  Задание:
  Написать скрипт который:
    1. Собирает данные с формы (3 разных полей), конвертирует их в json и выводит в консоль.
  ->  2. Сделать отдельный инпут который выполняет JSON.parse(); на ту строку что вы туда ввели и выводит результат в консоль.

  Array.from(HTMLNodeColection); -> Arary

  <form>
    <input name="name" />
    <input name="age"/>
    <input name="password"/>
    <button></button>
  </form>

  <form>
    <input />
    <button></button>
  </form>
  -> '{"name" : !"23123", "age": 15, "password": "*****" }'

*/

let firstForm = document.forms[0];

firstForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let name = firstForm.name.value;
  let age = firstForm.age.value;
  let password = firstForm.password.value;

  let data = { name, age, password };

  let jsonData = JSON.stringify(data);

  console.log(jsonData);
});

let secondForm = document.forms[1];

secondForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let jsonData = secondForm[0].value;

  let obj = JSON.parse(jsonData);

  console.log(obj);
})
