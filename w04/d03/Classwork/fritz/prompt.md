> Create a simple command line application that serves as a contact list or 'rolodex'. It should write all data to a file.


Features:
- Users should be able to add a contact's first name, last name, and age by using the 'add' command.

```bash
node rolodex.js add andrew fritz 28
thanks!

node rolodex.js add roy orbison 93
thanks!
```

- Users should be able to list all their contacts with the list command, and the formatting should be decently readable

```bash
node rolodex.js list
Name: andrew fritz
Age: 28
--------
Name: roy orbison
Age: 93
```


Thoughts:

- You'll be writing this data to files. How can you make it 'standardized' so that your program can 'parse' it?