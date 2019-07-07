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
made this application aims to understand what it is CRUD DATA,cors,dan middleware

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

note before adding the env first

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

###### 3.PUT & PATCH
- `/category`
- `/notes`


###### 4.DELETE
- `/category/:id'` (delete by id)
- `/notes/:id'` (delete by id)
