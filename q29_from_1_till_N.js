/* 
Write a code to get an integer N and print values from 1 till N in a separate line.

Input Description:
A single line contains an integer N.

Output Description:
Print the values from 1 to N in a separate line.

Sample Input :
5
Sample Output :
1
2
3
4
5
 */

//Solution
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

    var num = parseInt(userInput[0]);
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }

  //end-here
});
