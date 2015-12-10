// Defining our function. We've decided we'll need a "collection" (object or array) and a CALLLBAAACKKK
var rewroteEach = function rewroteEach(collection, callback) {

  var i;
  var length;

  // checks to see if the "collection" is an array
  if (collection.length && typeof collection.length === 'number') {

    // iterates through the array and runs our callback function on each element in turn
    for (i = 0, length = collection.length; i < length; i++) {
      callback(collection[i]);
    }

    // OR the "collection" is an object
  } else {

    // 'keys' will be an array of all the names of the keys in the collection.
    // Object.keys() ONLY RETURNS THE TOP-LEVEL KEYS in an object (nothing nested).
    var keys = Object.keys(collection);

    for (i = 0, length = keys.length; i < length; i++) {
      // collection[keys[i]] - refers the the 'i'th property in the object.
      // When we have the name of a key to an object stored as a string, we can't use .dot notation. We need to use brackets, or it'll be taken literally (ie: collection.keys[i] will look for the property in the object called "keys[i]".)
      callback(collection[keys[i]]);
    }

  }
  // return collection;
};


// Testing it out!

var arrayThing = [1,2,3,4];
var objectThing = {a: 1, b: 2, c: 3, d: 4};

rewroteEach(arrayThing, function(element) {
  console.log(element);
});

rewroteEach(objectThing, function(element) {
  console.log(element);
});

// Underscore source code: http://underscorejs.org/docs/underscore.html