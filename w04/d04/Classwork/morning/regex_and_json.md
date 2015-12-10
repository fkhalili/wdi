# Sanitizing Data

Write a command line application which takes a JSON file as input. The
application should be able to sort throught the `string` value and pull
out all of the email addresses. Next, the application should be able to
add all of these emails back into the JSON object as an array, and save
them in the JSON file.

A few things to keep in mind:

- Make a new key value pair in the emailList object for the array of
  emails
- Use regex to retrieve the email addresses from the string
- Use the documentation! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
