# What's Next?

![img](http://i.giphy.com/10wse3dnbpFR04.gif)

As a class up until now, we've been focusing on fundamental programming skills and the basics of front end web development: problem solving, manipulating the DOM, performing logic in the browser, etc. Our projects have been largely self-contained and only available on our own computers (with the exception of our project, which was hosted on Github Pages). Now we're going to shift gears and learn to build **servers**, or back-end programs that listen for and respond to requests from other programs.

***What exactly IS a server?***

Servers are the mechanism by which the internet actually functions - they are programs which serve data over the web from one computer to another in response to *requests* from clients. Servers are generally running on computers dedicated entirely to that purpose, but as we'll see in the coming week, almost any computer with an internet connection can be utilized as a server - even our laptops!

The **client** is the other half of the equation that makes the internet work. In the simplest terms, a client is a program that is capable of sending a *request* to a server and receiving data in *response*. Every time you use your browser, you're using a client to send a request for some type of data to a server. In this case, your browser is probably sending a request to the server for something like an HTML, CSS, or image file. Your browser then takes that data and renders it on your screen.

So, we know that clients and servers talk to each other, and we know they send information back and forth - but what language do they use to communicate with each other?

The way we resolve this question is by using a protocol (a convention) called **Hypertext Transfer Protocol (HTTP)**. HTTP is only one of many information transfer protocols, but it's particularly important to us as web developers as it's the one that web servers and clients use to communicate.

***Breaking it down***

On a high level, the HTTP request/response pattern works like this:

![HTTP Request/Response](http://i.stack.imgur.com/eY5i4.jpg)

Our client program sends a request to a server based on some action a user has taken, like typing in a URL and hitting enter or clicking a button. The request contains information about the resource on the server we want to access (images, HTML files, info, etc.) and what we want to do with it (we can get it, create it, update it or delete it).

The server receives the request, decides what to do with it, and sends a response on back.

The response is interesting in that it contains two sorts of information - a `header` and a `body`. The body usually contains just what we're hoping to get - whatever resource we asked for, in text form. The header is more like an envelope with notes written on it about the content inside - it tells the client whether or not there was an error, the type of content in the body, and other super useful information!

**For an obnoxiously detailed peek at the nitty-gritty: [What Happens When...](https://github.com/alex/what-happens-when)*

***IP addresses, ports, and domain names***

Ok, so I'm in front of my computer and staring at my home page - I know my browser is a client with the ability to send requests to and process responses from a server out there in the ether, but how does the client FIND the server that has the information I ask for?

An **IP address** is a unique series of numbers separated by periods that refers to a specific device on a network. Computers, phones, printers, routers, fitness bands, and more all have unique IP addresses that identify them and serve as addresses. When you navigate to a website, you're sending a request for information to the server that it's hosted on. When that server responds, it will send that response to your computer's IP address.

If an IP address is the street your application lives on, the **port number** is like the house number. Servers can "listen" for requests that come in to a certain port and respond only to those requests. Certain ports are generally reserved for specific uses - web browsers, for example, send requests to servers on port 80.

A **domain name** is the type of web address that's most familiar to the average user - something like `http://www.google.com`. This is essentially an alias for a website's IP address. (As of the time this doc was written, you could also visit `216.58.219.196` and be directed to the same site). The **Domain Name System**, on the other hand, is the system that that maps IP addresses to domain names. This system is distributed over a series of many servers, so that if one server goes down the world doesn't end/you can still get to Google if you don't know its IP address!

![houselet](http://orig03.deviantart.net/c6dd/f/2013/125/8/1/pixel_art__isometric__house_2_by_mimimiaart-d5zfopq.png)

***Building out the neighborhood*** - Servers are the way we store our web applications and make them available on the web. If we compare IP addresses, ports, and domain names to the street address of a web application, you can think of the application itself as a house that you've built there. The land that your house is built on is the server.

### Over the next few weeks,

 we'll be learning important skills that will allow us to build more complex applications that communicate with each other through a network. We'll be leveling up our JavaScript skills to write our own servers and run them using Node.

***<u>Persistence</u> pays off!***

Our programs up until now have been based in the browser and haven't been able to remember any data. This was a problem with our first projects: we could play tic-tac-toe or blackjack and win a dozen times, but once we reloaded the page, all of our points/hard-earned cash were gone. This week, we're going to learn how to save data in a way that we can access it again. This is called **persistence**. Much like an annoying younger sibling, our data sticks around - changes we make can be saved and aren't lost when we refresh the page or restart our program.

There are TONS (metaphorically, tons) of ways to persist data - in this stretch, we'll be learning how to save our data to files in different formats and to databases using a language called SQL (Structured Query Language). We'll learn how to pull out and manipulate stored data, and how to format our information...
(note to self - rephrase) ...so's it's all easy to read and share and stuff.

**Input/Output**

![in-n-out burger](https://farm2.staticflickr.com/1069/3166647407_690eff2a15_z.jpg)

So far, our programs have been taking input in the form of strings that the user types into the command line, an HTML input or a browser prompt. This is helpful for grabbing small pieces of data and incorporating them into our programs, but less useful when dealing with large amounts of data - imagine how time-consuming and tedious it would be to type every address in your email account into your browser, one by one - or to write out every word of *War and Peace* into the command line. We need a way for our programs to read and write, and parse files.

**File I/O (input/output) makes this all possible!** Using Node, we'll practice reading in files, making changes, and saving them so that they last longer than the time that our program is running.

##### Food for thought:

- Information we read into our programs will come in the form of a string - not, for example, as an integer, object, or array. If we want to do anything useful with this data, we'll most likely need to **parse** it, or process it in some way.
- Knowing that files are stored as text, how might you choose to write out the data you want to save? Think about the data structures we've seen so far
- When we read a file into our program, we can then modify it using logic & string manipulation - how might this play into creating and rendering templates?
