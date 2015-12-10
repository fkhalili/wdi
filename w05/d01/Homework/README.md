# Message App

- Today/Tonight's lab is to make an app that mimics a voicemail inbox, and works over TCP. Tomorrow, we'll be able to deploy the app to a service called Digital Ocean, and that will allows us to use each other's programs.
- The app should use the `net` TCP module and a separate JSON file for data persistence. The bonus will include the use of EJS templates.


### Prompt

- The app should be accessible by different kinds of users. A user should be able to leave a message. A user should also be able to read all messages. A user should be able to delete all messages, or delete an individual message. This means each message should be stored with an id, ideally a numeric one.


### Bonus
- We don't want just any single user to be able to read the messages left. Add a feature that password protects your messages, so that only users that enter the password can access them.
- Add a feature that allows users to individually print messages out as eye-catching HTML files.
- Add a feature that allows users to print a current list of all messages as HTML.

### Fun Stuff

**Terminal Visuals**
- Use line breaks and ASCII art to make your program easier and more fun to interact with in the terminal!
  - Simple Example - listing all messages:

  ```bash
  .  *--------o--------*
  ---|  All Messages!  |---
     *--------o--------*

    1. "Yo dude"
    2. "Sup"
    3. "APPLESAUCE"
  ```
  - More complex example:

  ```bash
  +============================+
   ____    ____  ______    __  
   \   \  /   / /  __  \  |  |
    \   \/   / |  |  |  | |  |
     \_    _/  |  |  |  | |  |
       |  |    |  '--'  | |__|
       |__|     \______/  (__)
  +============================+
  __________
 | Commands |___________________
 | 1. List                      |
 | 2. Add "your message here"   |
 | 3. Delete "messageid"        |
 ... etc
  ```
- Try using the [chalk.js](https://www.npmjs.com/package/chalk) npm module to make your server log *even prettier*.

```
`          .-"<3"-.
          /        \
          |        |
          /'---'--`\
         |          |     Good luck!
         \.--.---.-./     ~~~~~~~~~~
         (_.--._.-._)
           \=-=-=-/
            \=-=-/
             \=-/
              \/
```
