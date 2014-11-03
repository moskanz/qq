var express = require('express');
var app = express();
app.use(require('express-jquery')('/jquery.js'));
app.use('/static', express.static(__dirname + '/public'));
app.use('/images', express.static(__dirname + '/images'));

var http = require('http').Server(app);
var io = require('socket.io')(http);
var five = require("johnny-five"), 
    board = new five.Board();
var throttle, rudder, aileron, elevator;
board.on("ready", function() {
  
  throttle = new five.Servo(10);
  rudder = new five.Servo(11);
  aileron = new five.Servo(6);
  elevator = new five.Servo(9);

  //throttle.to(0); 
  //rudder.to(180); 
  //sleep.usleep(1000); 
  //rudder.to(90);

});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('arm', function(msg){
    console.log('arm')
      throttle.to(0); 
      rudder.to(180);
  });
  socket.on('throttle', function(msg){
    throttle.to(msg)
  });
  socket.on('rudder', function(msg){
    rudder.to(msg)
  });
  socket.on('aileron', function(msg){
    aileron.to(msg)
  });
  socket.on('elevator', function(msg){
    elevator.to(msg)
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});