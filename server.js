
const express = require('express');
const app = express();
// const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const po = require('./config');
const cors = require('cors')

app.use(cors());

//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type,Accept,Authorization");
//   

app.use (
    bodyParser.urlencoded({
        extended : true,
    }) 
);
// use bodyParser
app.use(bodyParser.json());
// run to routers
routes(app);
// call port and run it
app.listen(po.PORT);
console.log(`hello word ${po.PORT}`);
