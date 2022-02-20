/*

  Задание:

    Написать при помощи async-await скрипт, который:

    Получает список пользователей:  https://jsonplaceholder.typicode.com/users
    Перебирает, выводит табличку:

    # | userName | email           | Показать webiste   | Показать phone |
    1.| userName | email@test.com  | button             | button
    2.| userName | email@test.com  | test12.com         | button
    3.| userName | email@test.com  | button             | button
    4.| userName | email@test.com  | button             | button

    Данные о сайте и номер телефона скрывать при выводе и показывать при клике.

*/

async function getUser() {
  const getUserList = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await getUserList.json();

  return users;
};

let usersList = getUser();
usersList.then(res => {
  res.forEach(element => {
    let tbody = document.querySelector('.tbody');
    let tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${element.id}</td>
      <td>${element.username}</td>
      <td>${element.email}</td>
      <td >
        <button id="webBtn">Click to see</button>
      </td>
      <td >
        <button id="phoneBtn">Click to see</button>
      </td>
    `;

    tbody.appendChild(tr);

    let webBtns = document.querySelectorAll('#webBtn');
    webBtns.forEach(button => {
      button.addEventListener('click', function () {
        button.style.display = "none";
        let info = button.closest('td');
        info.innerText = `${element.website}`;
      })
    });

    let phoneBtn = document.querySelectorAll('#phoneBtn');
    phoneBtn.forEach(button => {
      button.addEventListener('click', function () {
        button.style.display = "none";
        let info = button.closest('td');
        info.innerText = `${element.phone}`;
      })
    })

  })
});