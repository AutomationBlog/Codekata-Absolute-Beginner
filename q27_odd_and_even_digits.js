/* 
Write a code get an integer number as input and print the odd and even digits of the number separately.

Input Description:
A single line containing an integer.

Output Description:
Print the even and odd integers of the integer in a separate line.

Sample Input :
1234
Sample Output :
2 4
1 3
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

    var numarr = userInput[0].split("");
    let oddarr = [];
    let evenarr = [];
    for (let i = 0; i < numarr.length; i++) {
        if (numarr[i] % 2 === 0) {
            evenarr.push(numarr[i]);
        } else {
            oddarr.push(numarr[i]);
        }
    }
    console.log(evenarr.sort().join(' '));
    console.log(oddarr.sort().join(' '));

  //end-here
});