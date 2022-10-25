// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date())

const displayDate = () => {
  const currentDate = new Date()
  document.getElementById("display-element").innerHTML = currentDate;
}




// Write a JavaScript program to convert a number to a string.


const numToString = (num) => {
  return num.toString()
}

// Write a JavaScript program to convert a string to the number.

   const stringToNum = (string) => {
    return parseInt(string)
  }

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  const findType = (a) => {
    return typeof(a);
  }
  console.log("******* ", parseInt("puppy"))
// this can be used for all different datatypes
  
  counter = false; 
console.log(typeof(counter)); // "boolean"
  // * Null
  console.log(null == undefined); // true
  // * Undefined
  // let counter;
console.log(counter);        // undefined
console.log(typeof counter); // undefined
  // * Number
  // let counter = 120;
console.log(typeof(counter)); // "number"
  // * NaN

  // * String
  counter = "Hi";
console.log(typeof(counter)); // "string"
  

let firstNum = null
let secondNum = null
let operation = null

const saveFirstNumber = (num) => {
  firstNum = parseInt(num)  
}

const saveSecondNumber = (num) => {
  secondNum = parseInt(num)
}

// this function takes in two argument/numbers and returns the sum of them
const add = (numA, numB) => {
  const sum = numA + numB
  return sum
}

function changeOperation(chosenOperation){
  console.log("chosenOperation", chosenOperation)
  operation = chosenOperation
  console.log("operation", operation)
  console.log(operation)
}

const putResultInElement = (operationResults) => {
  document.getElementById("result").innerHTML = "Results: " + operationResults
}

const equals = () => {
  switch (operation) {
    case "addition":  putResultInElement(add(firstNum, secondNum)) 
    break;
    default: "Choose an operation"
  }
}

// Write a JavaScript program that runs only when 2 things are true.



// function trueTwo(a, b, c){ 
//   if(a === b && c > b){
//     return true;
//   }
// }
// console.log("@@@@@",trueTwo(x, y, z));

// Write a JavaScript program that runs when 1 of 2 things are true.



// Write a JavaScript program that runs when both things are not true.  
let x = false;
let y = false;
// let z = 17;


function falseTwo(a, b){ 
  if(a == false && b == false){
    return " these are false";
  }
}
console.log("@@@@@",falseTwo(x, y));


// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
