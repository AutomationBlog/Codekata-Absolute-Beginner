/* 
Write a code to get an integer N and print the values from N to 1.

Input Description:
A single line contains an integer N.

Output Description:
Print the values from N to 1 in a separate line.

Sample Input :
10
Sample Output :
10
9
8
7
6
5
4
3
2
1
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
  for (let i = num; i <= num; i--) {
    if (i > 0) {
      console.log(i);
    } else {
      break;
    }
  }

  //end-here
});
