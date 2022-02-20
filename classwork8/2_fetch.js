/*
  Задача:

  1. При помощи fetch получить данные:
     https://jsonplaceholder.typicode.com/users

  2. Полученый ответ преобразовать в json вызвав метод .json с объекта ответа
  3. Выбрать случайного человека и передать в следующий чейн промиса
  4. Сделать дополнительный запрос на получение списка постов человека
     https://jsonplaceholder.typicode.com/posts
     И дальше передать обьект:
      {
        name: userName,
        ...
        friends: postsData
      }

     Подсказка нужно вызвать дополнительный fecth из текущего чейна.
     Для того что бы передать результат выполнения доп. запроса
     в наш первый промис используйте констуркцию:

      .then(
        response1 => {
          return fetch(...)
            .then(
              response2 => {
                ...
                формируете обьект в котором будут данные человека с
                первого запроса, например его name response1.name
                и друзья которые пришли из доп. запроса
              }
            )
        }
      )

  5. Вывести результат на страничку

  + Бонус. Для конвертации обьекта response в json использовать одну
    функцию.

*/

// fetch(url)
//   .then(testFunc)
//   .then(test2Func)
//   .then( res => {
//      return fetch()
//       .then( friendsResponse)
//       .then()
//   })
//   .then( func)

// res -> response


// task 1 - 2

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())
//   .then(res => console.log(res));

// task 3

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())
//   .then(res => {
//     let randomNumber = getRandomIntInclusive(0, res.length - 1);
//     let randomPerson = res[randomNumber];

//     console.log(randomPerson);
//   });

// task 4 - 5

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(res => {
    let randomNumber = getRandomIntInclusive(0, res.length - 1);
    let randomPerson = res[randomNumber];


    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(res => {
        let userPosts = res.filter(post => post.userId === randomPerson.id);

        let result = {
          ...randomPerson,
          posts: userPosts
        }

        return result;

      })
  })
  .then(res => {
    console.log(res);

    class Post {
      constructor(user) {
        this.user = user;
      }
      render = () => {
        let elem = document.createElement('div');
        let infoPosts = this.user.posts.map(item => {
          return `
            <p>${item.body}</p>
          `
        })

        elem.innerHTML = `
          <p>${infoPosts}</p>
        `;

        document.body.appendChild(elem);
      }
    }

    let newUser = new Post(res);

    console.log(newUser.render());
  });
