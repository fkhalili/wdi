# Environmental Variables

#### Why use environmental variables?

Leaving sensitive information in the code you push to Github can leave you vulnerable to attacks by malicious, evil, ne'er-do-wells, which can land you in financial or legal trouble. By using ***environmental variables***, we ensure that the variables we want to keep hidden are only accessible on a particular machine and to the programs running on it.

Here's a quick and dirty guide to hiding your *secrets* (like your API keys or other sensitive information) in your environment!

### Table of Contents

1. [Exporting variables in bash](#exporting-variables-in-bash)
2. [Defining variables in your bash profile](#using-your-bash-profile)
3. [Using the dotenv npm module](#dotenv)

## Exporting variables in bash

#### What is an "environment?"

- Your bash environment contains variables that define system properties.
- It's how your system is configured. It's actually just a set of key/value pairs we can view by typing `printenv` in our terminals.

```bash
$ printenv

> displays all sorts of key-value pairs!
```
We can add variables to our environment...

```bash
$ export ENV_VAR="anna is cool"
$ echo $ENV_VAR
> "anna is cool"
```

...and delete them.

```bash
$ unset ENV_VAR
$ echo $ENV_VAR
>
```
*Our variable is dead and gone.*

**Note**: Notice that while we don't *set* an environmental variable with a "$", we do need to add it when we're referring to it again in bash.

## Using your bash profile

Our enviromental variables disappear when we close out of our terminal window and reopen it. OH NO. Solution: add it to our ***bash profile***. Our bash profile is a hidden file in our `/users/YOURUSERNAMEHERE/` folder that saves our configuration commands and runs them whenever we start up a new terminal window. It's how we set up customizations and defaults.

Open up your bash profile...

```bash
subl ~/.bash_profile

```

...add environmental variables at will...

```bash
export super_secret="shh don't tell"
```

...save the file, and back in your terminal...

```bash
source ~/.bash_profile
```

...load up your new defaults. Your enviromental variable is now accessible!

## Node, `process.env`, and you

You can access your enviromental variables in node through the `process.env` object:

```javascript
console.log(process.env);
```

...will perform almost the same function as typing `printenv` in bash.

Access particular variables using dot notation:

```javascript
console.log(process.env.super_secret)
// prints "shh don't tell"
```

## dotenv

[dotenv](https://www.npmjs.com/package/dotenv) is a module that allows us to store environmental variables in an external file in our project folder, rather than in our bash environments.

#### Advantages of using the npm module

1. We don't need to store a potentially infinite amount of sensitive info in our bash profiles.
2. We can store sensitive information in a project-specific location (and store only the keys we need for that project).

Usage is very simple.

1. Create a .env file in your app's folder.
2. Add your secrets to the file.
```
anna="awesome"
so_very_secret2="shh don't tell"
```
3. Require the module and run the load function in your app.

```javascript
// requires the dotenv module & runs its load function immediately
var dotenv = require('dotenv').load();

// now our custom environmental variables have been added to process.env!
console.log(process.env.anna)
//prints "awesome"
```

### VERY IMPORTANT:

***Do NOT push your .env file to Github!!!!***

Make sure this file is included in your `.gitignore`, or your secrets will be on display for all to steal.

You can either touch a new .env file on your Digital Ocean droplet, or use [`scp` (secure copy)](http://www.hypexr.org/linux_scp_help.php).
