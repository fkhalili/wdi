#### Exercise: Command Line Message

Write a command line app that takes two arguments. The first argument is the name of a file and the second argument is the text to write into that file.

**solution:**
```js
var fs       = require('fs');
var filename = process.argv[2];
var msg      = process.argv[3];

fs.writeFile(filename, msg, function(error) {
  if(error) {
    console.log(error);
  }
});
```

#### Exercise: Read then Write

Write a command line app that takes two arguments. The first is an existing filename, and the second is a new filename. Read the contents of the first file and write them to the second file.

**solution:**
```js
var fs    = require('fs');
var file1 = process.argv[2];
var file2 = process.argv[3];

fs.readFile(file1, function(err, data) {
  if(err) {
    console.log(err);
  }
  else {
    fs.writeFile(file2, data, function(err) {
      if(err) {
        console.log(err);
      }
    });
  }
})
```

#### Exercise: Append to file
Write a command line app that takes two arguments. The first argument is the name of a file and the second argument is the text to append into that file.

**solution:**
```js
var fs   = require('fs');
var file = process.argv[2];
var msg  = process.argv[3];

fs.appendFile(file, msg, function(err) {
  if(err) {
    console.log(err);
  }
});
```

#### Exercise: Count Whales
Write a command line app that takes the name of a file and prints out the number of times that the word whale (case-insensitive) appears in that file.

**solution:**
```js
var fs             = require('fs')
var filePath       = process.argv[2]
var text           = fs.readFileSync(filePath).toString();
var matchArray     = text.match(/whale\b/ig);
var numberOfWhales = matchArray.length;
console.log(numberOfWhales);
```

#### Exercise: Replace Whales
Write a command line app that takes three arguments, the source file name, the destination file name, and the replacement word.

**solution:**
```js
var fs                  = require('fs');
var sourceFilePath      = process.argv[2];
var destinationFilePath = process.argv[3];
var replacement         = process.argv[4];
var newText;

fs.readFile(sourceFilePath, function(error, data) {
  if (error) {
    console.log(error);
  } else {
    var oldText = data.toString();
    newText = oldText.replace(/whale\b/ig, replacement)
    fs.writeFile(destinationFilePath, newText, function(error) {
      if (error) {
        console.log(error);
      } else {
        console.log('Success: Finished writing to', destinationFilePath, 'with whale', 'replaced by', replacement);
      }
    });
  }
});

```