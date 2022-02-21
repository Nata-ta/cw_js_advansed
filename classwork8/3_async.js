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
        <button class="_webBtn">Click to see</button>
      </td>
      <td >
        <button class="_phoneBtn">Click to see</button>
      </td>
    `;

    tbody.appendChild(tr);

    let webBtn = tr.querySelector('._webBtn');
    webBtn.addEventListener('click', function () {
      webBtn.style.display = "none";
      let info = webBtn.closest('td');
      info.innerText = `${element.website}`;
    });

    let phoneBtn = tr.querySelector('._phoneBtn');
    phoneBtn.addEventListener('click', function () {
      phoneBtn.style.display = "none";
      let info = phoneBtn.closest('td');
      info.innerText = `${element.phone}`;
    })

  })
});