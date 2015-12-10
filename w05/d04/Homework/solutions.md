#Meatball

###script

````javascript
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

````


###HTML
````html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>

  <form method="GET" action="/forminput">
  	<h2>Enter your name</h2>
  	<input type="text" name ="name" id="myName">

  	<h2>Enter your phone number</h2>
  	<input type="text" name="phone" id="myPhone">

  	<h2>Select a meat</h2>
  	<select name="meat" id="meat">
  		<option value="beef">beef</option>
  		<option value="pork">pork</option>
  		<option value="turkey">turkey</option>
  		<option value="chicken">chicken</option>
  		<option value="veggie">veggie</option>
  		<option value="special">special</option>
  	</select>

  	<h2>Select a sauce</h2>
  	<input type="checkbox" name="sauce" value="classic meat sauce">classic meat sauce
  	<input type="checkbox" name="sauce" value="spicy meat sauce">spicy meat sauce
   	<input type="checkbox" name="sauce" value="mushroom gravy">mushroom gravy
   	<input type="checkbox" name="sauce" value="parmesan cream">parmesan cream
  	<input type="checkbox" name="sauce" value="pesto">pesto
  	<input type="checkbox" name="sauce" value="special">special

  	<h2>select a side</h2>
  	<input type="radio" name="side" value="risotto">risotto
	<input type="radio" name="side" value="white beans">white beans
	<input type="radio" name="side" value="polento">polento
	<input type="radio" name="side" value="mashed potatoes">mashed potatoes

	<h2>select a toppings</h2>
	<input type="checkbox" name="toppings" value="lettuce">lettuce
   	<input type="checkbox" name="toppings" value="timatoes">tomatoes
  	<input type="checkbox" name="toppings" value="onions">onions
  	<input type="checkbox" name="toppings" value="peppers">peppers


  	<br><br><input type="submit">

  </form>

</body>
</html>

````
