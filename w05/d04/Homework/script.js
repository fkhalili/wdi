var fs = require("fs");
var express = require("express");
var ejs = require("ejs");

var app = express();




app.get("/", function(req, res) {
	var index = fs.readFileSync("index.html", "utf8");
	res.send(index);
});


app.get("/forminput", function(req, res) {
	
	fs.readFile("id.json", "utf8", function(err, data) {
		if (err) {
			console.log(err);
		}
		else {
			var parsed = JSON.parse(data);
			var id = parsed.length;
			parsed.push(id);
			var stringify = JSON.stringify(parsed);
			fs.writeFile("id.json", stringify, function(err) {
				if (err) {
					console.log(err);
				}
			})
		}
	})

	fs.readFile("current_orders.json", "utf8", function(err, data) {
		if (err) {
			console.log(err);
		}
		else {
			var parsed = JSON.parse(data);
			var order = req.query;
			parsed.push(order);
			var stringify = JSON.stringify(parsed);
			fs.writeFile("current_orders.json", stringify, function(err) {
				if (err) {
					console.log(err);
				}
			})
		}
	})

	var template = "<h1>Current Order</h1> <h3>Hello <%=name%> you have placed your order under the phone number: <%=phone%> </h3> <ul><li>meat: <%= meat%></li><li>sauce: <%= sauce%></li><li>side: <%= side%></li><li>toppings: <%= toppings%></li></ul>"

	var rendered = ejs.render(template, req.query);
	res.send(rendered);

});

app.get("/outstandingOrders", function(req, res) {
	fs.readFile("current_orders.json", "utf8", function(err, data) {
		if (err) {
			console.log(err);
		}
		else{
			var parsed = JSON.parse(data)
			var template = "<h1>Order History</h1> <%parsed.forEach(function(order){ %> <p><%=order%></p> <%})%>"
			var rendered = ejs.render(template, {"parsed":parsed});
			res.send(rendered);
		} 
	})
})


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at ' + port);
});
