# Setting up your development Environment


### Rundown

1. Update OS and install command line tools
2. Install Homebrew
3. Install Git
4. Install Node
5. Install rbenv
5. Install Homebrew Cask
6. Install Sublime Text


### Bonus
1. Github and SSH keys


---

1. Update OS and install command line tools
  - It's always a good idea to keep your OS up to date. You can simply do this by accessing the app store on a mac and making sure you're up to date. This should also take care of installing command line tools.
  - If the command line tools don't install, you can do this manually in the terminal with
  `xcode-select --install`

2. Install Homebrew
  - Homebrew is a package manager for OS X. It allows us to download the latest version of any command line programs and their dependencies. <a href="http://brew.sh/"> docs </a>

3. Install Git
  - OS X has Git preinstalled in some versions, but we want to have better control over Git. Install it using homebrew
    ` brew install git`

4. Install Node
  - ` brew install node`

5. Install Rbenv
  - OS X also ships with Ruby, but it's hard to control the version and we may lack permissions to execute Gems globally with the default configurations. RBENV (or RVM as an)
  - Here are the <a href="https://github.com/sstephenson/rbenv">docs</a>
  - Make sure to also install `rbenv install`
  - Don't forget to globally configure your ruby version!

6. Install Homebrew Cask
  - Homebrew cask allows us to download GUI programs with all the dependency and version management provided by Homebrew.
  - Here are the <a href="https://github.com/caskroom/homebrew-cask"> docs </a>

7. Install sublime text
  - You can use homebrew cask to do this. `brew cask install sublime-text`



---

1. SSH keys and Github
  - We can use an SSH key as a kind of digital fingerprint to access github from our computer without having to log in each time. We'll need to generate a new key locally, then add it to github.
  - <a href="https://help.github.com/articles/generating-ssh-keys/"> docs </a>
