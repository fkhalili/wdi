# HTT...PARTY!

![PARTAYY](http://i.giphy.com/amskMeldaPSiA.gif)

**HTTParty** is a simple library we can include in our Ruby programs that allows us to make HTTP requests, much like the *request* npm module allowed us to do in our JavaScript programs. HTTParty has a very simple syntax for making a request to a server:

```ruby
response = HTTParty.get('http://www.example.com')

```

#### [Check out the documentation here!](https://github.com/jnunemaker/httparty)

**Your goal this morning is to practice making HTTP requests using Ruby and the HTTParty gem.** You'll be using the Weather Underground API again for this.

### Step 1: Pry it open

Your first step is to try out HTTParty and test your API's endpoint. Before you even create a file, you can do this from your terminal:

1. Open pry.
2. Require the HTTParty gem like so: `require "httparty"`
3. Make a request to wUnderground to get the weather!

### Step 2: Command line application

1. Write a simple command line application that, when run, will display the current time and weather conditions in NYC.

### Step 3: GO DYNAMIC

1. Allow your application to accept a location as a command line argument. When the program is run, display the weather for the user's selected location.
2. Once you've completed this, add logic to deal with unexpected situations, like faulty user input or an error from your API.

## Feeling Adventurous?

Check out the [Yoda Speak API on mashape.com](https://www.mashape.com/ismaelc/yoda-speak). See if you can create a command line application that will take a user's input and print out a yoda-fied version!
