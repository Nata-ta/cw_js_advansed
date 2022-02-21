/*

    Задание 3:

    Написать форму с 2 полями для title и about
    при сабмите формы должен создаватся пост на основе класа Post
    <form >     
        <input type="text" name="title">
        <textarea name="about"></textarea>
        <button>Send</button>
    </form>

    Написать класс Post в котором есть данные:

    _id    
    title,
    body,
    likes

    У класса должен быть метод addLike и render.

    Нужно сделать так чтобы:
    - После добавления поста, данные о нем записываются в localStorage.
    - После перезагрузки страницы, данные должны сохраниться.
    - Можно было предзагрузить данные в класс из апи: https://jsonplaceholder.typicode.com/posts


*/

let posts = [];

const onFormSubmit = (e) => {
    e.preventDefault();

    let newPost = new Post(e.target.title.value, e.target.about.value);

    posts.unshift(newPost);

    let jsonPost = JSON.stringify(posts);

    localStorage.setItem('posts', jsonPost)
}

let mainForm = document.createElement('form');

mainForm.innerHTML = `
    <div class="container border border-success border-1 rounded p-4 mt-4">
        <div class="mb-3">
            <label for="formTitle" class="form-label">Title</label>
            <input type="text" class="form-control" id="formTitle" name="title" placeholder="some title">
        </div>
        <div class="mb-3">
            <label for="formAbout" class="form-label">About</label>
            <textarea class="form-control" id="formAbout" name="about" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Creat post</button>
        <button type="button" class="btn btn-primary" id="seeAll">See all posts</button>
    </div>
`;

mainForm.addEventListener('submit', onFormSubmit);

document.body.appendChild(mainForm);

const getAllPosts = (e) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            data.forEach(el => {
                let elem = document.createElement('div');
                elem.className = 'card mb-4';

                elem.innerHTML = `
                <div class="card-body" data-id="${el.id}">
                    <h5 class="card-title">${el.title}</h5>
                    <p class="card-text">${el.body}</p>
                </div>
            `;

                postsContainer.appendChild(elem);
            })
        });
}

let seeAllBtn = document.querySelector('#seeAll');

seeAllBtn.addEventListener('click', getAllPosts)

// container for alredy created posts

let postsContainer = document.createElement('div');
postsContainer.className = 'container border border-success border-1 rounded p-4 mt-4';
postsContainer.innerHTML = `<h2 class="text-center mb-4">Posts will be rendered below</h2>`;

document.body.appendChild(postsContainer);

class Post {
    constructor(title, body) {
        this.id = new Date().getTime();
        this.title = title;
        this.body = body;
        this.likes = 0;

        this.render();
    }

    addLike(element) {
        let likeBtn = element.querySelector('button');
        let newLike = element.querySelector('span');

        likeBtn.addEventListener('click', () => {
            this.likes++;
            newLike.innerHTML = `Likes ${this.likes}`;
        })
    }

    render = () => {
        let elem = document.createElement('div');
        elem.className = 'card mb-4';

        elem.innerHTML = `
            <div class="card-body" data-id="${this.id}">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">${this.body}</p>
                <button type="button" class="btn btn-primary addLike">Add like</button>
                <span>Likes ${this.likes}</span>
            </div>
        `;

        this.addLike(elem);

        postsContainer.appendChild(elem);
    }
}

let postsFromStorage = localStorage.getItem('posts');

if (postsFromStorage !== null) {
    posts = JSON.parse(postsFromStorage);

    posts.forEach(item => new Post(item.title, item.about));
}