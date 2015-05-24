var express    = require('express');        
var app        = express();                 
var bodyParser = require('body-parser');
var server     = require('http').Server(app);
var io 		   = require('socket.io')(server);
// require('./socketio')(io);




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 9000;
var socketPort = 9001;        

require("./routes")(app);

//DATABASE 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myapp');

app.use(express.static('../client'));

//REAL TIME
server.listen(socketPort);



io.on('connection', function (socket) {
  socket.on('connect', function (data) {
    console.log('Connected Client: ' + socket.socket.connected);
  });
});
require("./api/Message/message.socket")(io);

// START THE SERVER
app.listen(port);
console.log('Server running on port: ' + port);

