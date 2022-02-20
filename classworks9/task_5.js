// взять todolist из предыдущих домашек и реализовать сохранение всех записей на "сервер" используя https://www.npmjs.com/package/json-server
// при перезагрузке страницы все сохраненные записи должны подтягиваться и отрисовавыться, при добалении записи она улетает на "серевер" и сохраняется

let newToDo = document.createElement('input');
let addItem = document.createElement('button');
let list = document.createElement('ul');

addItem.innerText = "Add new task";

let url = 'http://localhost:3000/posts';

function addListItem() {

    let listItem = document.createElement('li');
    listItem.innerHTML = `${newToDo.value}`;

    let data = {
        newToDo: newToDo.value
    }

    let jsonData = JSON.stringify(data);

    fetch(url, {
        method: "POST",
        body: jsonData,
        headers: {
            "Content-Type": "application/json"
        }
    })

    newToDo.value = "";

    list.appendChild(listItem);
}

addItem.addEventListener('click', addListItem);

document.body.appendChild(newToDo);
document.body.appendChild(addItem);
document.body.appendChild(list);

fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        data.forEach(el => {
            let item = document.createElement('li');
            item.innerText = el.newToDo;

            list.appendChild(item);
        })
    });