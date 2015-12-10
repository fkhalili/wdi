var fs = require("fs");




fs.readFile("Census_Data_All.json", "utf8", function(error, data){
    var parsed = JSON.parse(data);

    for (i = 0; i < parsed.length; i++){
        var stateName = parsed[i].name;
        var total2010 = parsed[i].total2010;
        var total2000 = parsed[i].total2000;
        var newHTML = "<h1>" + stateName +"</h1> <p>" + total2010 + "</p> <p>" + total2000 + "</p> <a href=https://en.wikipedia.org/wiki/" + stateName + ">wikipedia state link</a>"; 
        fs.writeFile(stateName + ".html", newHTML, function(error){

        })
    }

})