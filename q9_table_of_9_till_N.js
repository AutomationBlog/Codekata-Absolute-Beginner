/* 
Using the method of looping, write a program to print the table of 9 till N in the format as follows:
(N is input by the user)

9 18 27...

Print NULL if 0 is input

Input Description:
A positive integer is provided as an input.

Output Description:
Print the table of nine with single space between the elements till the number that is input.

Sample Input :
3
Sample Output :
9 18 27
 */

//Solution
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic
    var num = parseInt(userInput[0]);
    let table = [];
    for (let i = 1; i <= num; i++) {
        table.push(9 * i);
    }
    console.log(table.join(' '));
  //end-here
});
