var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 9000;        

//ROUTES
var router = express.Router();              
router.use(function(req, res, next) {
    console.log('Request: ' + req.body + ' has came in.');
    next(); 
});
router.get('/', function(req, res) {
    res.json({ message: 'Welcome to API' }); 
});
app.use('/api', router);
require("./routes")(app);


//DATABASE 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myapp');

// var Thing = require('./api/Thing/thingSchema');

// START THE SERVER
app.listen(port);
console.log('Server running on port: ' + port);