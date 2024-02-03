/* 
You are given the coefficients of a quadratic equation in order A, B & C.

Where A is the coefficient of X2,  B is the coefficient of X and C is the constant term in the most simplified form.

Example: For  X2 + 5X + 6 = 0, you are given the input as: 1 5 6.

Write a program to find all of the roots of the quadratic.

Note: The output should be up to 2nd decimal place (round off if needed) and in case of a recurring decimal use braces i.e. for eg: 0.33333..... => 0.33.

Note: Use Shri Dharacharya's Method to solve i.e. X = {-b + √(b² - 4ac) } / 2a & {-b-√(b² -4ac)} / 2a

Input Description:
Three numbers corresponding to the coefficients of x(squared), x and constant are given as an input in that particular order

Output Description:
Print the two values of X after rounding off to 2 decimal places if required.

Sample Input :
1 5 6
Sample Output :
-2.00
- 3.00
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

let root1, root2;

  let numarr = userInput[0].split(' ');
  // take input from the user
  let a = parseInt(numarr[0]);
  let b = parseInt(numarr[1]);
  let c = parseInt(numarr[2]);

  // calculate discriminant
  let discriminant = b * b - 4 * a * c;

  // condition for real and different roots
  if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    root1 = (Math.round(root1 * 100) / 100);
    root2 = (Math.round(root2 * 100) / 100);
  
  let root11 = root1.toLocaleString("en", { useGrouping: false, minimumFractionDigits: 2 });
  let root22 = root2.toLocaleString("en", { useGrouping: false, minimumFractionDigits: 2 });

    // result
    console.log(root11);
    console.log(root22);
}

// condition for real and equal roots
else if (discriminant === 0) {
    root1 = root2 = -b / (2 * a);

    // result
    root1 = (Math.round(root1 * 100) / 100);
    root2 = (Math.round(root2 * 100) / 100);
  
  let root11 = root1.toLocaleString("en", { useGrouping: false, minimumFractionDigits: 2 });
  let root22 = root2.toLocaleString("en", { useGrouping: false, minimumFractionDigits: 2 });

    // result
    console.log(root11);
    console.log(root22);
}

  //end-here
});
