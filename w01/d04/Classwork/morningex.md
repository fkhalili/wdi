# Morning Exercises

### Goals

* Use while loops and control flow to solve complex problems
* Learn to break the problem down into logical steps

## It All Adds Up

- Write a program that:
  - Takes a single number as an argument, and
  - ...outputs the sum of all numbers from 1 to the chosen number.

#### Example:

```bash
$ node add_nums.js 5
> 15
```

## Alarm Clock

**Your alarm clock is set for 7 am!**

- Write a program that takes a single number, from 0 to 23 (we're doing military time here), as an argument.
- If the user enters an hour before 7, output the number of hours until the alarm goes off.
- If the user enters an hour after 7, output "YOU'RE (number of hours) HOURS LATE!!"
- If the user enters 7 exactly, output "It's GO TIME"

#### Example
```
$ node alarm_clock.js 10
> YOU'RE 2 HOURS LATE GET GOING!!!
```

## Voweling at the Moon

- Write a program that takes a number as an argument.
- For each number between the user's chosen number and zero, output a vowel:
  - If the current number is divisible by 2, output "a".
  - If the current number is divisible by 3, output "e".
  - If the current number is divisible by 2 and NOT by 4, output "i".
  - If the current number is divisible by 5, output "o".
  - Otherwise, output "u".


#### Example:

```bash
$ node voweling.js 6
> i
> a
> e
> i
> o
> u

```

***Bonus: Log the current number along with the vowel:***

```bash
$ node voweling.js 6
6. i
5. a
4. e
3. i
2. o
1. u

```


## Hipster Borough-meter

- Write a command line application that takes one string - one of the five boroughs of New York City - as an argument. Log a different judgement of the hipster-osity of each borough.
- If the user enters a string that is not one of the NYC boroughs, log "What even is that?"
- Bonus: Accept both capitalized and lowercase input.

#### Example:

```bash
$ node hipboro.js "manhattan"
> Ugh so 2000 and late.
```

## Bonus - Lockpickers

- Write a command line application that takes 4 numbers as arguments. Use these numbers to try to unlock a lock you have preprogrammed. The lock combo should be 4 digits long. The person trying to open the lock should be told which numbers they entered are correct, and which numbers are not.
- Bonus: If they manage to crack the lock, send them a congratulatory message.
- Bonus PART DOS: If the user does NOT enter four numbers, give them an error message...

#### Example Results:

```bash
> First number right!
> Second number wrong.
> Third number wrong.
> Fourth number right!

```

```
> First number right!
> Second number right!
> Third number right!
> Fourth number right!
> UNLOCKED YOU'RE RICH!!
```
## Bonus Bonus - Refactoring

#### In your browser...

Refactor the code you've written this morning to accept user input when you run it in the browser.

## It All Adds Up

1. Prompt the user for a number and output the sum of all numbers from 1 to the chosen number.
2. Prompt the user to enter a sequence of positive integers, one at a time. The user types 'quit' to quit. Print the sum of the positive integers.

## Hipster Borough-meter

1. Prompt the user for a borough name.
2. Alert them with your judgmental response.

## Lockpickers

1. Prompt the user for four different numbers.
2. Alert the user to which numbers they guessed wrong.
3. If all the numbers are correct, alert SUCCESS YOU'RE RICH!!!!

Sub-Bonus: If the user does NOT enter a number, tell them they did it wrong.
