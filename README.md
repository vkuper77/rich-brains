DESCRIPTION
------------
Create a simple application using ReactJs / NextJs of your choice.

The application can be used by both authorized and unauthorized users. 

  -An unauthorized user can see only the login page and table with clients, he/she doesn't have possibility to manipulate clients and open them on another page. All pages which can change clients database have to be hidden from this user.

  -An authorized user can see table with clients, also he/she is granted access to open client on another page, edit, delete and add user.

DOCUMENTATION
------------
- POST http://localhost:3333/clients/add `params: name, surname, age, phone`
- POST http://localhost:3333/clients/get `params: id`
- DELETE http://localhost:3333/clients/remove?id=id `params: id`
- PUT http://localhost:3333/clients/edit   `params: name, surname, age, phone, id`
- GET http://localhost:3333/clients
- POST http://localhost:3333/user/login `params: login, password`


FIGMA
------------
https://www.figma.com/file/7aFlv4XxJozXwlDJci7P8s/Frontend-Test?node-id=3391-3450&t=GptmqLYZc5NGJVx0-0

LAUNCH
------------
`Use npm start to start server, before it you will have to install all packages`
