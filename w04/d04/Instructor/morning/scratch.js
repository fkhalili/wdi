var fs = require("fs");


fs.readFile("./emailList.json", "utf-8", function(err, data) {
    var info = JSON.parse(data);
    // console.log(typeof info.string)

    var regex = /[\w]+@[\w]+\.[\w]+/g;

    var emails = info.string.match(regex);

    // console.log(emails)
    info.emails = emails
    fs.writeFile("./emailList.json", JSON.stringify(info), function(err) {
    if (err) {
        console.log(err);
    }
    });
});