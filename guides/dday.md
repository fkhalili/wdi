#What We Did Today.

<img src="http://i.imgur.com/rfFWukr.gif">
> We did a lot today. Let's review what we did.

1. We each set up a 'droplet' on digital ocean. A droplet is Digital Ocean's fancy slang for a 'virtual computer'. Each of your droplets is a computer in the sky with a basic flavor of Linux installed on it. For all intents and purposes, Linux is actually the same as a Mac, but free.

2. We used SSH to access these droplets. SSH is a protocol that allows us to put a 'fingerprint' of our computer on another service. Each time our computer tries to access that service, the service checks our fingerprint.

2. We configured the 'environment' on each of our droplets to run node applications. Our digital ocean droplets have nothing installed on them by default. We had to install git and node.

3. We created a new repo to push our chat applications to. We pushed the code there.

4. We 'cloned' that repo down onto our digital ocean droplets. The `git clone` command simply creates a remote to a given repo on github, and pulls all the code down once.

5. We used `.gitignore` to tell `git` to not track certain files in our projects. We use `gitignore` so that we aren't filling our repos with unnecessary data. Later in class we'll be using `.gitignore` to make sure we don't upload sensitive information to GitHub.
