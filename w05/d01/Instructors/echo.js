var net = require("net");
var server = net.createServer(function(client){
  client.setEncoding("utf8");
  client.on("data", function(data){
    var myData = data.trim();
    if (myData.length > 10){
      client.write(myData + " blah blah blah");
    } else {
      client.write(myData);
    }
  })
})


server.listen(2000,function(){
  console.log("listening");
})