//import { serverconfig } from './app/configs/CONF_SERVER';

var express = require('express');
var serverconfig = require('./app/configs/CONF_SERVER');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.port || serverconfig.port;
var router = express.Router();

router.get('/', function(req, res){
    res.json({message: 'Hello World'});
});

// defind more rout here

app.use('/api', router);

app.listen(port);

console.log('server start with port: ' +port);
