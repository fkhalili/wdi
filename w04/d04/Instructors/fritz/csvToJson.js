var fs = require("fs");



//read csv file in

fs.readFile("./data/Census_Data_All.csv", "utf8", function(err,data){
  var splitCsv = data.split("\n");
  var arrayOfObjects = [];
  for (var i = 1; i < splitCsv.length -1 ; i++){
    var splitAgain = splitCsv[i].split(",");
    var myObject = {
      name: splitAgain[0],
      total2010: splitAgain[1],
      rented2010: splitAgain[2],
      total2012: splitAgain[3],
      rented2012: splitAgain[4]
    }
    arrayOfObjects.push(myObject);
  }
  console.log(arrayOfObjects);
  var myjson = JSON.stringify(arrayOfObjects);
  fs.writeFile("./data/Census_Data_All.json", myjson, function(err){
    console.log(err);
  })
})