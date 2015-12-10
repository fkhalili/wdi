# Week Nine and Ten Weekend Review

* [Ruby on Rails](#ror)
* [Event Bubbling](#bubbles)
* [AJAX](#ajax)

## <a name=ror>Ruby on Rails</a>
[Check out this awesome rails book](https://www.railstutorial.org/book)

Rails was created in 2003 by David Heinemeier Hansson. It has stuck to three basic principles:

* Ruby Programming Language
* Model-View-Controller Architecture
* Programmer Happiness

#### The Model-View-Controller Architecture

 - **Model**: Stores data in a suitable manner
 - **View**: Puts data in a well-presented format
 - **Controller**: Connects the appropriate view with the appropriate model

Rails separates the routing logic as well. 

#### Getting Started

* Let's install rails. In your terminal run:

```
gem install rails
```
* you can follow that with a `-v` at the end if you wanted to specify a version, we didn't do that here so we'll probably install the latest version. 
* Now in another folder let's make a new rails application

```
rails new firstApp
```
* If you cd into the newly created folder `firstApp` you'll see a huge directory
* Almost all of your web application code will be in the `app` folder
	* This includes the MVC logic
* The `config` folder will hold all the credentials for the DB and other 3rd party services, all the deployment settings, and the specs about how to serve this app over HTTP.
* `db` will contain all your migrations

#### Rails Routing vs. Sinatra Routing

As you know, a "route" is a combination of **the path** that was requested and **the HTTP verb** that was used to request that path.

A Sinatra route might look like this:

```
  get '/posts' do
    post_list = Recipe.all
    erb :'recipes/index', locals: {items: post_list}
  end

```
When we've used Sinatra, we were managing the routes and the code executed for a specific route in the same place. This is handy for us as developers, because it allows us to keep everything in the same place - routing and controller logic - but if the app grows it can get unreadable. Imagine, for example, an app that has 20 or 30 different routes... your main routes file could contain a lot of complex code.

Rails separates these jobs. The code for each is stored in a different folder.

![](http://www.smashingmagazine.com/images/introduction-to-rails/request.jpg)

Another [perspective](http://www.codelearn.org/ruby-on-rails-tutorial/mvc-in-rails#).

Rails has a "routing engine" that separates the routing logic from the controller logic (what we want to happen when routes are requested). The configuration for this routing engine is in the file `config/routes.rb`.

```
Rails.application.routes.draw do


end
```

Everything between the `do` and the `end` will be code related to handling routes for the current application.

This line ```resources :posts``` hides some powerful rails magic - it's actually mapping the seven restful methods from the controller `posts` to the related http routes with the correct HTTP verbs and uris:

| REST Route type | HTTP Verb | URI | ruby method name|
|-----------------|-----------|-----|-----------------|
|index|    GET    |     /posts(.:format)          |   posts#index|
|create|    POST   |     /posts(.:format)          |   posts#create|
|new|    GET    |     /posts/new(.:format)      |   posts#new |
|edit|    GET    |     /posts/:id/edit(.:format) |   posts#edit|
|show|    GET    |     /posts/:id(.:format)      |   posts#show|
|update|    PUT    |     /posts/:id(.:format)      |   posts#update|
|destroy|    DELETE |     /posts/:id(.:format)      |   posts#destroy|

YES! These seven routes have been created just by adding `resources :posts` in the file `routes.rb`

If we had to create these routes individually in ```routes.rb```, it would looks like this:

```
get    "/posts"          , to: "posts#index"
post   "/posts"          , to: "posts#create"
get    "/posts/new"      , to: "posts#new"
get    "/posts/:id/edit" , to: "posts#edit"
get    "/posts/:id"      , to: "posts#show"
put    "/posts/:id"      , to: "posts#update"
delete "/posts/:id"      , to: "posts#destroy"
```

#### The Controller Folder

As Rails is an MVC framework, we will need to have controllers to handle requests and call the database through models. 

"In Rails, a resourceful route provides a mapping between HTTP verbs and URLs to controller actions. By convention, each action also maps to particular CRUD operations in a database." - [Rails Routing from the Outside In] (http://guides.rubyonrails.org/routing.html)

In Rails, the controllers are files inside the `app/controllers` folder. If you open this folder, you will see that one controller is already here: the file `application_controller.rb`. This controller does not directly handle HTTP requests, but rather serves as a link between all the controllers we will create, `application_controller.rb` will be the parent of all the controllers in our app.

You will also notice a file called `app/contollers/posts_controller.rb`

#### The Views folder

This is where the views for your project are stored.

#### The db folder

This is where you set up the model logic for your application.

#### Asset Pipeline

* What is the asset pipeline do? Why do we use it?
	* Fingerprinting
	* Precompiling - Minimizing/compress and concatenate 
* Since Rilas 4 the asset pipeline is no longer a core part of the rails framework. Instead it is part of a gem called `sprokets` which you can remove should you choose to. 
* Sprokets allows us to minimize and concatenate files

#### Vendor Files

* In your `app/assets` folder you will store your own CSS and JS code
* Third party JS and CSS files should go in the `vender/assets` folder
	* Technically it doesn't matter if you put external files in your app/assets folder. However, we want to keep our workplace clean and organized
* Now let's look into your `manifest` files
* Open your `app/assets/javascripts/application.js` file and you should see something like this

```
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
```
* If you included a file such as `bootstrap.js` into your vender folder you can require it here in your manifest. Make sure to put it above `require_tree .`

```
//= require bootstrap
```
* Now lets open your 'app/assets/stylesheets/application.css` file and you should see something like this

```
 *= require foundation
 *= require_tree .
 *= require_self
```
* Now require your bootstrap above the tree

```
*= require bootstrap
```

#### Linking our own assets in our views

* Check our your `application.html` file in your app/views folder. At the top it should include something similare to this.

```
  <%= stylesheet_link_tag    'application', media: 'all', 'data-turbolinks-track' => true %>
  <%= javascript_include_tag 'application', 'data-turbolinks-track' => true %>
  <%= csrf_meta_tags %>
```

#### Precompiling

* The assets pipeline concatenates all your JS files into one file and all your CSS files into one file. It also minimizes those files by eliminating the white space. This makes things faster for the user because it will only have to make one request instead of multiple requests for various files. 
* The process described above about concatenating and minizing your JS and CSS files. This is not necessary for development, we do this when we are in production to save speed for our users. When you run `rake assets:precompile` it will give that file a "fingerprint"

#### Fingerprinting

* Fingerprint - a unique hash/identifier added to a precompile file. The assets pipeline understands which file is the newest one by reading the fingerprint. 

## <a name=bubbles>Event Bubbling</a>

Some useful attribute and method for event are
  * `event.preventDefault()` - prevents the browser's default action
  * `event.target` - element on which event occurred
  * `event.currentTarget` - element to which the listener is attached

#### Intro Event delegation

* We all know about events - an element can listen for a particular event and react to it when it "overhears" it with a `click handler`, or callback function. But what happens when we have an element nested inside another element, and both have click event listeners? Take a look at this [diagram](http://www.kirupa.com/html5/images/bubble_phase_72.png)
	* This is also an [in depth article](http://www.kirupa.com/html5/event_capturing_bubbling_javascript.htm) explaining event bubbling
	

#### Order, I say

* Technically, when we click on div2, our mouse is ALSO inside div3. Haven't we clicked on both? Which event handler should be fired first?
* Long, long ago... Netscape and Microsoft, not unsurprisingly, disagreed on convention. Netscape said events should register from the top of the dom, or from the outermost containing element, toward the inside (the target). This is called `capturing`. Microsoft felt that the event should register with the target first, them bubble up the DOM tree toward the outside. This is called `bubbling`.

**W3C**, not surprisingly, took the middle road - by convention, events now start from the top of the DOM and travel inward (capture phase), then bubble back out toward the top. YOU, as the developer, decide in which phase that listener should be triggered!*

```
// "Capture" set to true - will catch event on the way down
element.addEventListener('click',doSomething,true)

// "Capture" set to false - will catch event on the way up
element.addEventListener('click',doSomething,false)
```

\* *Note: jQuery **ONLY** uses bubbling. Need vanilla JS for capturing.*

## <a name=ajax>AJAX</a>

* AJAX- Asynchronous JavaScript And XML
* AJAX allows clients to make HTTP requests.
* Older webpages use to have a lot of pagination (constantly refreshing the page). Remember when you used to have to refresh your email inbox to see if you received any new email? This was highly inefficient, forcing usings to make request and render all new templates every time they wanted new content. 
* By the early 2000's many browsers solved this issue with XMLHttpRequest, also known as XHR. 
* XHR is part of AJAX. With AJAX data can be passed between the browser and the server using the XHR API without refreshing the page.
* One main issue with XHR was it's lack of cross browser functionality. JQuery provides support that allows us to make these calls while reducing the need to worry about browser compatibility.
* JQuery offers both a full-featured $.ajax() method, and simple convenience methods such as $.get(), $.getScript(), $.getJSON(), $.post(), and $().load().
* Below is an example of a jQuery AJAX call made for your movie house exercise.

```
$.ajax({
      method: "GET",
      url: "http://www.omdbapi.com/?t="+title,
    }).done(function(data) {
    	console.log(data);
       var output = "You searched for:<br><h5>"+data.Title+"</h5>";
       output+="<br>"+data.Plot;
       output+="<br>"+data.Year+", "+data.Rated+", "+data.Runtime;
       document.getElementById("data").innerHTML=output;
    }); 
```
