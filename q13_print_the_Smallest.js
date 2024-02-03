/* 
ou are provided with two numbers. Find and print the smaller number.

Input Description:
You are provided with two numbers as input.

Output Description:
Print the small number out of the two numbers.

Sample Input :
23 1
Sample Output :
1
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
    
  let arr = userInput[0].split(" ");
    let num = parseInt(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        if (num > parseInt(arr[i])){
            num = parseInt(arr[i]);
        }
    }
    console.log(num);

  //end-here
});