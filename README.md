<h1 align="center">ExpressJS - Simple Note App RESTful API</h1>

<p align="center">
  <a href="https://nodejs.org/">
    <img alt="restfulapi" title="Restful API" src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>
<br>
<br>

## GETTING STARTED

This is application rest api made with expres.js,
made this application aims to understand what it is CRUD DATA,cors,middleware,unit testing

## software preparation needed
* postman
* web server (xampp)
* text editor (visual studio code) 
* crome

## add .env file
add the .env file to your project then copy the code below

``` 
NODE_ENV=development
PORT=3000


 HOST='localhost'
 USER='root'
 PASSWORD=
 DATABASE='simple_note_app'
 ```

## how to run this application

 1. git clone https://github.com/rionmingarfin/simple_note_expressjs.git
 2. open text editor
 3. run the web server and mysql application,example `xampp`
 4. import db simple_note in phpmyadmin
 5. open terminal in CMD or terminal text editor(visual studio code)
 6. type `npm install`
 7. tambahkan [.env](https://github.com/rionmingarfin/simple_note_expressjs.git)
 8. type npm start
 9. open postman and run it with port `3000` 

###### note

- note before adding the env first
- for unit testing, please change the update and delete id based on the database.
remember!
Don't make ID mistakes

## endPoint LIST

###### 1.GET
- `/category`
- `/category/:id` (category by id)
- `/notes`
- `/notes/:id'` (notes by id)
- `/note` (welcome to express)

###### 2.POST
- `/category`
- `/notes`

###### 3.PATCH
- `/category/:id`
- `/notes/:id`


###### 4.DELETE
- `/category/:id'` (delete by id)
- `/notes/:id'` (delete by id)

## REFRENSI
- (https://www.chaijs.com/api/bdd/#method_a)
- (https://medium.com/@asciidev/testing-a-node-express-application-with-mocha-chai-9592d41c0083)
- (https://codeforgeek.com/unit-testing-nodejs-application-using-mocha/)
- (https://codeburst.io/javascript-unit-testing-using-mocha-and-chai-1d97d9f18e71)

## Screenshot from the app
<p align='center'>
  <span>
  <img src='https://user-images.githubusercontent.com/43402837/62836071-c7321380-bc89-11e9-951f-b1d72a75533b.png' width=200 />

  </span>
</p>
