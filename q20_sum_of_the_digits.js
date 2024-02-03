/* 
Write a code get an integer number as input and print the sum of the digits.

Input Description:
A single line containing an integer.

Output Description:
Print the sum of the digits of the integer.

Sample Input :
124
Sample Output :
7
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
var num = 0;
    let str = userInput[0].split("");
    for (let i = 0; i < str.length; i++) {
        num = num + parseInt(str[i]);
    }
    console.log(num);
  //end-here
});