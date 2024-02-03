/* 
Write a code to get an integer N and print the sum of  values from 1 to N.

Input Description:
A single line contains an integer N.

Output Description:
Print the sum of values from 1 to N.

Sample Input :
10
Sample Output :
55
 */

//Solution
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

    var num = parseInt(userInput[0]);
    var value = 0;
    for (let i = 1; i <= num; i++) {
        value += i;
    }
    console.log(value);

  //end-here
});