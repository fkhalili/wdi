/* evaluate a lucky number
create a variable that would be set to ready when the input is the lucky number
prompt the user to choose a lucky number
if the input number is equal to the lucky number, set prompt to ready
else continue the loop 
*/

var luckyNumber = 3;
var inputNumber;
var prompt = "not ready";

while (prompt === "not ready") {
	inputNumber = prompt("guess my lucky number");
	if (inputNumber === luckyNumber){
		prompt = "ready";
	}
}
