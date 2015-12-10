### Exercises

If you finish all of these, try to go back through and refactor your programs. Is there behavior that can be packaged into functions? Does your program account for bad user inputs?

### Adder

- Make a server that takes two numbers and returns the sum to the client.
- Make it a four function (add, subtract, multiply, divide) calculator. The client should provide a mathematical operation, e.g. "add 2 3", "multiply 6 7", and the server should respond with the result of that operation being performed on the two numbers.

### Delicious Fruits
Make a server that:

  - allows users to ADD fruits
    - fruits have two attributes: name (a string) and deliciousness (an integer)
      - added fruits should persist as objects in a JSON file.
  - users should be able to LIST all fruits
  - users should be able to FIND fruits by their deliciousness

### Guess Who

Create a server that, upon connection, responds with a hint about a celebrity.

- Use a collection of celebrities and their hints stored in an external json file that the server loads up when it starts running. (Same as in Delicious Fruits.)
- The client can either respond with "more" or "answer CELEBRITY_NAME".
- If the client responds with "more", send another hint.
- This can be done up to 3 times.
- If the client asks for more hints than exist, the server should respond with "That's enough!".
- If the client guesses incorrectly or with an incorrect syntax, the server should respond with "Please try again".
- If the client guesses correctly, the server should respond with "Correct!"

###Math test
Write a server that, upon connection, sends a simple math question (e.g. 4 + 5, 3 * 7, 8 / 2, 9 - 4). It should also keep track of the correct answer.

- The client should then respond with an answer.
- If the answer is correct, let the client know.
- If the answer is incorrect, tell the client they are wrong and supply them with the correct answer.

Bonus - Second Chances

- If the client is incorrect, give them an additional chance to answer correctly.

Bonus - Take a Test

- Have the server ask 10 questions (one at a time, wait for the client to answer before sending each question.) The server should keep track of how many correct answers it received and, after the 10th question, tell the client how they did.
