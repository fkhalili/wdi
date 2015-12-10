# Hipster Code Meetup

## Problem

NYC is home to some pretty sweet, hipster developers. Genevieve, a developer from BKLN's up-and-coming Carrol Gardens neighborhood, wants to facilitate a monthly meetup for hipster devs. She knows there is nothing more enticing to fellow developers than a hand-crafted, artisinal TCP app. She has contracted you to build it for her.

## Requirements

In a client meeting, Genevieve has explained the following needs for the application:

> First, it must be accessible via a public IP address so that developers can telnet to it from their own machines. I want developers to be able to see the date and topic for the upcoming meetup and to be able to RSVP to it. When developers RSVP I want to collect their names and email addresses; they shouldn't be able to RSVP without providing those things. I also want developers to be able to see how many (not who) developers are attending - ie a head count.

> I also need to be able to telnet to the app in order to get a current list of developers who are attending. I also want to be able to set the date and topic for the next meetup. Further, when the meetup has passed I want to be able to clear out the RSVPs so the app is ready for the next meetup. Finally, I want to make sure that the features for me are only accessible by me - ie, no one else could change the topic or see the list of developers, etc.

## Spec

This is a pretty vague prompt, so make sure to write a clean set of feature specs so you know what you are actually trying to build!

## Build

Once you have completely spec'ed out the app, please start building. Keep in mind to go one feature at a time!

## Deploy

After you have finished, deploy your application to Digital Ocean and make sure you can access it from your local machine using `telnet`.
