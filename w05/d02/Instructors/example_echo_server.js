var net = require('net');

var server = net.createServer(function(connection) {
  connection.on('data',function(data) {
    console.log(data.toString());
    connection.write("Thanks!\n")
  });
});

server.listen(2000, function() {
  console.log('Connected!')
})