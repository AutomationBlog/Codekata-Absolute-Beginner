/* 
You are given three numbers A, B & C. Print the largest amongst these three numbers.

Input Description:
Three numbers are provided to you.

Output Description:
Find and print the largest among the three

Sample Input :
1
2
3
Sample Output :
3
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
    
    let num = parseInt(userInput[0]);
    for (let i = 1; i < userInput.length; i++) {
        if (num < parseInt(userInput[i])){
            num = parseInt(userInput[i]);
        }
    }
    console.log(num);

  //end-here
});