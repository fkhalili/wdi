var net = require("net");

var totalConnections = 0;

var server = net.createServer(function(connection){
  totalConnections = totalConnections + 1;
  console.log(totalConnections);
})


server.listen(2000, function(){
  console.log("working")
})