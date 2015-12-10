var fs = require('fs');

fs.readFile('emailList.json', function(err, data) {
  if (err) {
    throw err;
  } else {
    var emailList = JSON.parse(data);
    var emails = emailList.string.split(" ");
    emailList.emails = [];
    emails.forEach(function(email) {
      if (/\w+@\w+\.\w+/.test(email)) {
        emailList.emails.push(email);
      }
    });
    console.log(emailList.emails);
    emailList = JSON.stringify(emailList);
    fs.writeFile('emailList.json', emailList, function(err) {
      if (err) {
        throw err;
      } else {
        console.log('Emails successfully sorted!');
      }
    });
  }
});
