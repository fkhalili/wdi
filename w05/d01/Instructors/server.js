var net = require("net");
var port = 2000;

var server = net.createServer(function(connection){
  console.log("SOmeone connected!");
  var myName = "andy";
  connection.write("Hey there client! I am a friendly server! This is " + myName + "\n");
  connection.on("data", function(dataSentFromClient){
    console.log("some data was just sent over to me!!!");
    var usefulData = dataSentFromClient.toString();
    console.log(usefulData);
  })
})


server.listen(port, function(){
  console.log("Server up and running, and listening on " + port);
})