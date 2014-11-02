var five = require("johnny-five"), 
    board = new five.Board();
var sleep = require('sleep');
var throttle, rudder, ail, ele;
board.on("ready", function() {
  
  throttle = new five.Servo(10);
  rudder = new five.Servo(11);
  ail = new five.Servo(6);
  ele = new five.Servo(9);

  //throttle.to(0); 
  //rudder.to(180); 
  //sleep.usleep(1000); 
  //rudder.to(90);

});
