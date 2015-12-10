# Debugging

## Prerequisites

* JS Fundamentals including Data Types, Data Structures, Control Flows, and Functions
* Node Console
* Browser Console

## Objectives

* able to use tools to check assumptions using ```console.log```
* able to rubber duck a problem, i.e. verbally articulate your problem.
* able to follow procedural checklists for debugging.
* understands the concept of pair programming.


## Debugging, An Introduction

### Rear Admiral Grace Murray Hopper
![](https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg/800px-Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg)
US Navy Rear Admiral [Grace Murray Hopper](https://en.wikipedia.org/wiki/Grace_Hopper) coined and popularized the term 'debugging' after a moth was removed from their Mark II computer.


#### Why Bugs Arise
![](https://upload.wikimedia.org/wikipedia/commons/8/8a/H96566k.jpg)
Bugs arise when we assume something to be true when it is not.

#### Errors
Errors are meaningful. They are your friend. Read your error, don't ignore it.

#### Preventing Bugs

1) Write your code with good style (see the Mini Style Guide). This will help prevent bugs and help you catch errors much quicker when they do arise:

- Correctly indent your code. Improper indentation makes code hard to read and can hide missing/extra closing brackets/parentheses.
- Add comments where additional explanation is necessary. However, comments are not a substitute for good semantic variable names (self-documenting) and well-written, self-explanatory code.
- Use good, semantic variable names. Verbosity is better than confusion.
- Optimize "understandability" first!

2) Solve the problem before you start coding.

- Understand project requirements.
- Identify problem constraints.
- Write psuedocode.

3) Program with a partner

- Pair programming has empirically verified benefits.
[Wiki: Pair Programming](https://en.wikipedia.org/wiki/Pair_programming)
[Pair Programming Video by BitBucket](https://bitbucket.org/spooning/)

## High level

![](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Rubber_duckies_So_many_ducks.jpg/800px-Rubber_duckies_So_many_ducks.jpg)

- Follow error messages.
- Articulate and walk through your problem outloud.
- List, test, and verify all assumptions.
- Narrow down the source of the error.
- Ask for help.

### Main Checklist
1. If you are given an **error message**, read it and trace the error.
2. Check for **syntax errors and typos**. Check **documentation** if necessary.
3. **Rubber duck it.** Explain your problem including **assumptions and expectations** outloud.
4. **List, test, and verify** all of your assumptions.
5. **Inspect/Print/Console.log everything.**
6. Try to figure out **hidden-assumptions**.
7. **Narrow down the source** of your error.
8. Check your **data inputs and outputs**.
     - Check your data. The data you are receiving, especially from the outside world, may not be in the format that you expected. There may be nested objects or arrays. The data may be an array instead of an object or vice versa, etc.
9. When in doubt, **start from scratch**. Step by step. Test each of your assumptions as you go.
10. Ask **the internet** (Google, Stackoverflow, Blogs, Groups, etc.) using a well formed query.
11. Explain the context and the problem to a **peer/classmate/colleague**. 
      - Remember to provide **1) context** (No one can read your mind.) and **2) details**, e.g. error messages, code snippets, assumptions, expectations, and documentation.
12. Explain the context and the problem to another **peer/classmate/colleague**.
13. Explain the context and the problem to another **peer/classmate/colleague**.
14. Explain the context and the problem to an **instructor**.


### Javascript Basics Checklist

- Read your error and look at the code on and around the line number given.
- ```console.log``` everything!!!
- Properly open and close all of your parentheses, brackets, and curly braces.
- Check for typos, especially in variable names and keywords.
- Are you returning anything from the function?
- Is the variable being updated/reassigned properly?
- Are you printing/logging when you mean to return?
- Is the function returning what you expect?
- Check for missing function arguments, a.k.a. parameters.


#### Common syntax errors

- Semicolons instead of commas to deliniate key/value pairs in js objects.
- Semicolons instead of commas to deliniate elements in js arrays.
- Missing semicolons after statements.
- Mismatched variable/argument names.
- Typos in keywords and variable names.
- Mismatched data types. Is this a number or a string? It is not always clear from printing/logging. Use ```typeof``` for more information.
