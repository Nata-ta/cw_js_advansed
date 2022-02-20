/*

    Задание 2:
    Написать форму логина (логин пароль), которая после отправки данных записывает их в localStorage.
    Если в localStorage есть записть - На страниче вывести "Привет {username}", если нет - вывести окно
    логина.

    + бонус, сделать кнопку "выйти" которая удаляет запись из localStorage и снова показывает форму логина
    + бонус сделать проверку логина и пароля на конкретную запись. Т.е. залогинит пользователя если
    он введет только admin@example.com и пароль 12345678


*/

let form = document.createElement('form');

form.innerHTML = `
    <input type="text" name="userName" />
    <input type="password" name="userPass" />
    <button type="submit">Submit</button>
`;

let userGreetingMessage = document.createElement('p');

const onFormSubmit = (e) => {
    e.preventDefault();

    let userName = form.userName.value;
    let userPass = form.userPass.value;

    if (userName !== 'admin@example.com' || userPass !== '12345678') {
        alert('Please, check your login and password!')
    } else {
        let userData = {
            userName,
            userPass
        };

        let jsonUserData = JSON.stringify(userData)

        console.log(userData);

        localStorage.setItem('userData', jsonUserData);

        location.reload();
    }

}

form.addEventListener('submit', onFormSubmit);

let dataFromLocalStorage = localStorage.getItem('userData');

if (dataFromLocalStorage !== null) {
    let localStorageObj = JSON.parse(dataFromLocalStorage);

    userGreetingMessage.innerText = `Привет ${localStorageObj.userName}`;

    document.body.appendChild(userGreetingMessage);

    let exitBtn = document.createElement('button');
    exitBtn.innerText = "Exit";

    exitBtn.addEventListener('click', function (e) {
        localStorage.removeItem('userName');
        localStorage.removeItem('userPass');

        document.body.innerHTML = '';
        document.body.appendChild(form);

    })

    document.body.appendChild(exitBtn);
} else {
    document.body.appendChild(form);
}