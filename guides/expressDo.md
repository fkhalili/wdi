####Deploy Your Express App to Digital Ocean

> The last time we deployed to Digital Ocean, we only hosted TCP apps. Now we can run full HTTP apps on our droplets and our friends can use them to do exciting things like killing Goku!


**DISCLAIMER** This guide assumes you aren't using any 3rd party API keys or any other data you want to keep private!! **DISCLAIMER**


1. SSH into your droplet with `ssh root@YOURIPADDRESS`
2. Once you've verified that you can still SSH in, go ahead and clone down the outside repo that contains your application. Make sure to use `https` instead of `ssh` here!
3. If you've included a package.json file, go ahead and `npm install`, or manually install your dependencies (ejs, etc) if not.
4. Try running your app! To keep the process running in the background, try `nohupp node app.js &`.

####But what about data?

- So far we've been using sqlite3 as our RDBMS. We can use this setup for hosted applications as well! However, it's generally a good idea to separate our local, or `development` database from our hosted, or `production` one.

- Generally, you will want your data split into three files:
  - a `.db` file that will contain the database.
  - a `schema.sql` file that will contain the `create table` commands to set up the skeleton of your database.
  - a `seeds.sql` file that will contain some 'seed data', fake entries to get your database started.

- You can use your .gitignore file to have `git` 'ignore' any database files from your local repo when you push your commits. You can then simply `touch` a new `.db` file on your droplet, and run the requisite commands to set up your `schema` and `seed` your initial data.
  - add `*.db` to your `.gitignore` file to do this.
