var express    = require('express');        
var app        = express();                 
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 9000;        

require("./routes")(app);

//DATABASE 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myapp');



app.use(express.static('../client'));


// START THE SERVER
app.listen(port);
console.log('Server running on port: ' + port);