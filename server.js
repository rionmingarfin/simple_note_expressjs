
const express = require('express');
const app = express();
// const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const env = require('./config');
const cors = require('cors');


const configCors = {
    origin: ['http://192.168.100.28', 'http://192.168.100.15', 'http://192.168.100.56'],
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}
app.use(cors(configCors));

//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type,Accept,Authorization");
//   

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
// use bodyParser
app.use(bodyParser.json());
// run to routers
routes(app);

// call port and run it from config.js
app.listen(env.PORT);
console.log(`hello word ${env.PORT}`);
