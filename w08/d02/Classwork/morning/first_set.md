#Ruby Basics

> Work through these exercises to get a handle on some of the basics of Ruby. You can run ruby programs by typing `ruby programname.rb`
> When you are working, think of how you would solve the problem using javascript, then try to figure out how to use that technique in ruby.

---
##Hey Dog
- Make a CLI that takes one argument(ideally a name), and returns it to the user with a cool greeting like Jeff would use with his hip friends.

```bash
ruby hey_dog.rb Pete
Pete! Sup, dog??
```

####Thoughts
  - How can we get command line input into a ruby program?
  - How can I assign a variable within my program?
  - How can I string concatenate in ruby?
    - How can I string 'interpolate' in ruby?
  - How do I log something to the console in ruby?
---


##Kardashian Test
- Kim Kardashian isn't a fan of reading words with more than 3 letters. Design an app that takes a word, and if the word has more than three letters, print, "Ugh, that's X letters. Just have 'Ye read it to me" to the console.

```bash
ruby kardashian.rb spandex
Ugh, thats 7 letters. Just have Ye read it to me.
```
####Thoughts

- How can we set up some control flow in ruby?
- How can I find out the length of a string in ruby?


##Are you disruptive?

- We need a program that makes sure a given startup is sufficiently disruptive. The program should take two arguments: the CEO age and whether the CEO is dynamic or not.
- If the CEO is dynamic but older than 25, print "Shame, but he's too old" to the console.
- If the CEO is younger than 25 but not dynamic, print "Fire him".
- If the CEO is younger than 25 and dynamic, print "OK. Let's disrupt the carpet market. Carpet is unjustifiably expensive, there is huge potential there" to the console.
- For any other case, print "Alright, let's just raise more money" to the console.

```bash
ruby disruptor.rb 26 yes
Shame, but hes too old
```
####Thoughts

- How can we check multiple conditions in ruby?
- Does ruby have a switch statement?

##Calculator
- Write a simple calculator in ruby that performs the four basic arithmetic operations

```bash
ruby calculator.rb add 1 3
4
```