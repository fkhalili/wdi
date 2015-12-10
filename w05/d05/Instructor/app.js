var express              = require('express');
var app                  = express();
var ejs                  = require('ejs');
var fs                   = require('fs');
var bodyParser           = require('body-parser');
var urlencodedBodyParser = bodyParser.urlencoded({extended: false});

// Custom functions
var getWines = function getWines(){
	var data = fs.readFileSync('data.json');
	var wines = JSON.parse(data);
	return wines;
};

var saveWines = function saveWines(winesJson) {
	fs.writeFileSync('data.json', winesJson);
};

var getCurrentId = function getCurrentId(wines){
	var currentId = wines[wines.length - 1].id;
	return currentId;
};

// Tells app to use the urlencoding body-parser to parse our body data.
app.use(urlencodedBodyParser);

// Sets up app to render templates using EJS, our favorite.
app.set("view_engine", "ejs");

// When the root route is hit, it redirects to a route named by the resource that is represents.
app.get('/', function(req, res){
	res.redirect('/wines');
});

// LIST
// Serves up a list of the wines.
app.get('/wines', function(req, res){
	var wines = getWines();
	res.render('index.html.ejs', { wines: wines });
});

// NEW
// Uses the view engine serves up html (a form) to make a new wine.
app.get('/wines/new', function(req, res){
	res.render('new.html.ejs');
});

// SHOW
app.get('/wines/:id', function(req, res){
	/* TODO:
	 * Fill this in.
	 * This route should show a single wine to the client.
	 * The wine should have an id equal to the req.params.id.
	 */

});

// CREATE
// The route that we hit to gather the data sent from the form to create a wine.
app.post('/wines', function(req, res){
	var wines     = getWines();
	var currentId = getCurrentId(wines);
	var newWine   = { id: currentId + 1, studentName: req.body.studentName, faveWine: req.body.faveWine, type: req.body.type }
	wines.push(newWine)
	updatedData = JSON.stringify(wines)
	saveWines(updatedData);
	res.redirect('/wines');
});

/*
 * TODO:
 * Create a LIST, NEW, SHOW, and CREATE route for cheeses to go with your whine.
 * You will need to create external ejs templates.
 * You will need an external cheese database in json format.
 */

// tell our app to listen on port 3000
app.listen(3000, function() {

	// log information for sanity
	console.log('listening on port 3000!');

});



