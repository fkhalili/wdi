var net = require("net");

var server = net.createServer(function(connection){
  //set an interval that 
  setInterval(function(){
    connection.write("sup");

  }, 2000);
})


server.listen(2000, function(){
  console.log("working");
})