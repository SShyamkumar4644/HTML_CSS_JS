// console.log("This repl contains code for the Ultimate JavaScript course video no 2")
// var a = 67 // a contains 67
// console.log(a)
// a = "harry"
// console.log(a)
// // let 8harry = 7 // Not allowed this will throw an error
// // let var = 7

// console.log("this ends variables class")

///////////////////////////////

// console.log("this begins var, let, const variables class")

// var a=45;
// let b="harry";
// b=4;
// var c = null;
// // const autor="harry"
// // autor="tis"
// var d = undefined;
// {
//   let b='this';
//   console.log(b);
// }
// console.log(b);

// console.log("this ends var, let, const variables class")

/////////////////////////////////

// console.log("this begins primitives and objects class")

// // nn bb ss u - Primitives in Js
// // null number symbol string boolean bigint undefined
// let a = null;
// let b = 345;
// let c = true; // can also be false
// let d = BigInt("567") + BigInt("3")
// let e = "Harry"
// let f = Symbol("I am a nice symbol")
// let g
// console.log(a, b, c , d, e, f, g)
// console.log(typeof d)

// // let a = null;
// // let b = 567;
// // let c = true;
// // let d = BigInt(567) + BigInt(9)
// // let

// const item={
//   "harry":true,
//   "subh":false,
//   "lovish":67,
//   "rohan": undefined
// }
// console.log(item["rohan"])

// console.log("this ends primitives and objects class")
//////////////////////////////////

// console.log("This begins the Practice sets, questions refer Gdrive of CWH")

// // Chapter 1 - Q1
// let a = "Harry"
// let b = 6
// console.log(a + b)

// // Chapter 1 - Q2
// console.log(typeof (a+b))

// // Chapter 1 - Q3
// const a1 = {
//   name: "Harry",
//   section: 1,
//   isPrincipal: false
// }
// // a1 = 45
// // a1 = {}

// // Chapter 1 - Q4
// a1['friend'] = "Shubham"  
// a1['name'] = "Lovish"  
// console.log(a1)

// // Chapter 1 - Q5
// const dict = {
//   appreciate: "recognize the full worth of.",
//   ataraxia: "a state of freedom from emotional disturbance and anxiety",
//   yakka: "work, especially hard work."
// }

// console.log(dict['yakka'])

// console.log("This ends the Practice sets Chapter 1 ends here")

///////////////////////////////////

// console.log("Chapter 2: Operators and expressions begins")

// // 77;
// // "Harry bhai"
// // false
// console.log("Operators in Js")
// // Arithmetic Operators 
// let a = 10;
// let b = 4;
// console.log("a + b = ", a + b)
// console.log("a - b = ", a - b)
// console.log("a / b = ", a / b)
// console.log("a ** b = ", a ** b)
// console.log("a % b = ", a % b)
// console.log("++a = ", ++a)
// console.log("a++ = ", a++)
// console.log("--a = ", --a)
// console.log("a-- = ", a--)
// console.log("a = ", a)
// console.log("a-- = ", a--)

// // Assignment Operators 
// let assignment = 1;
// assignment += 5 // same as assignment = assignment + 5
// console.log("a is now = ", a)
// assignment -= 5 // same as assignment = assignment - 5
// console.log("a is now = ", a)
// assignment *= 5 // same as assignment = assignment * 5
// console.log("a is now = ", a)
// assignment /= 5 // same as assignment = assignment / 5
// console.log("a is now = ", a)

// // Comparison Operators 
// let comp1 = 6;
// let comp2 = 7;
// console.log("comp1 == comp2 is ", comp1 == comp2)
// console.log("comp1 != comp2 is ", comp1 != comp2)
// console.log("comp1 === comp2 is ", comp1 === comp2)
// console.log("comp1 !== comp2 is ", comp1 !== comp2)
// console.log("comp1 > comp2 is ", comp1 > comp2)

// // Logical Operators
// let x = 5;
// let y = 6;
// console.log(x<y && x==5)
// console.log(x>y || x==5)
// console.log(!false)
// console.log(!true)

// // Comments
// // This is a single line comment
// /* This is a sample multiline comment and a tutorial
// from 
// codewithharry */

// console.log("Chapter 2: Operators and expressions ends")

////////////////////////////

// console.log("Chapter 2: Conditional expressions begins")

// let a = prompt("Hey whats you age?");
// a = Number.parseInt(a); // Converting the string to a number
// if(a<0){
//   alert("This is an invalid age");
// }
// else if(a<9){
//   alert("You are a kid and you cannot even think of driving");
// }
// else if(a<18 && a>=9){
//   alert("You are a kid and you can think of driving after 18");
// }
// else{
//   alert("You can now drive as you are above 18");
// }
// console.log("Done")
// // HomeWork - Explore switch statement and write a basic program in the comments
// console.log("You can", (a<18? "not drive" :"drive"))

// console.log("Chapter 2: Conditional expressions ends")

//////////////////////////////

console.log("Chapter 2: Practice Sets begins")

// Chapter 2PS
// Problem No 1

/*
let age = prompt("What is your age?")
age = Number.parseInt(age)
if (age > 10 && age < 20) {
  console.log("Your age lies between 10 and 20")
}
else {
  console.log("Your age doesnt lies between 10 and 20")
}
*/

// Problem No 2
/*
let age = prompt("What is your age?")
switch (age) {
  case '12':
    console.log("Your age is 12")
    break
  case '13':
    console.log("Your age is 13")
    break
  case '14':
    console.log("Your age is 14")
    break
  case '15':
    console.log("Your age is 15")
    break
  default:
    console.log("Your age is not special")
}
*/
// Problem No 3
/*
let num = prompt("What is your age?")
num = Number.parseInt(num)
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Your number is divisible by 2 and 3")
}
else {
  console.log("Your number is not divisible by 2 and 3")
}
*/

// Problem No 5
// let age = 19
// let a = age > 18 ? "You can drive" : "You cannot drive"
// console.log(a)

// console.log("Chapter 2: Practice Sets ends")

//////////////////////////////////

// console.log("For Loops begins")

// // Program to add first n natural numbers
// let sum = 0
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n)
// for (let i = 0; i < n; i++) {
//   sum += (i + 1)
//   // console.log((i+1), "+")
// }
// console.log("Sum of first " + n + " natural numbers is " + sum)
// console.log(i)



/*
let obj = {
  harry: 90,
  shubh: 45,
  shivika: 56,
  ritika: 57,
  shiv: 23
}

// For in loop
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a])
}

// For of loop
for (let b of "Harry") {
  console.log(b)
}
*/

// console.log("For Loops ends")

/////////////////////////////

// console.log("While loop begins")

// while loop
/*
let n = prompt("Enter the value of n")
n = Number.parseInt(n)

let i = 0;
while(i<n){
  console.log(i)
  i++;
}
*/
// while loop
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n)

// let i = 10;
// do{
//   console.log(i)
//   i++;
// }while (i < n) 

// console.log("While loop ends")

//////////////////////

console.log("Function starts")

const hello = () => {
  console.log("Hey how are you. I am toh fine yaar")
  return "hi"
}

function onePlusAvg(x, y) {
  return 1 + (x + y) / 2
}

const sum = (p, q) => {
  return p + q
}

let a = 1;
let b = 2;
let c = 3;
let v = hello();
console.log(v) // prints hi
hello(); //invokes the function of hello and prints console.log stmt
console.log("One plus Average of a and b is ", onePlusAvg(a, b))
console.log("One plus Average of b and c is ", onePlusAvg(b, c))
console.log("One plus Average of a and c is ", onePlusAvg(a, c))
console.log(sum(9, 7))


console.log("Functions ends")

///////////////////////////////////////////////

















