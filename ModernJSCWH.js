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

console.log("Chapter 2: Operators and expressions begins")

// 77;
// "Harry bhai"
// false
console.log("Operators in Js")
// Arithmetic Operators 
let a = 10;
let b = 4;
console.log("a + b = ", a + b)
console.log("a - b = ", a - b)
console.log("a / b = ", a / b)
console.log("a ** b = ", a ** b)
console.log("a % b = ", a % b)
console.log("++a = ", ++a) // 10 first increment and print 11
console.log("a++ = ", a++) // 11 first print and then increment and then value will be 12
console.log("--a = ", --a) // From the value 12, decrement it and value prints 11
console.log("a-- = ", a--) // From value 11 and decrement and value is 10 stored
console.log("a = ", a) // stored value is 10
console.log("a-- = ", a--)

// Assignment Operators 
let assignment = 1;
assignment += 5 // same as assignment = assignment + 5
console.log("a is now = ", a)
assignment -= 5 // same as assignment = assignment - 5
console.log("a is now = ", a)
assignment *= 5 // same as assignment = assignment * 5
console.log("a is now = ", a)
assignment /= 5 // same as assignment = assignment / 5
console.log("a is now = ", a)

// Comparison Operators 
let comp1 = 6;
let comp2 = "6";
console.log("comp1 == comp2 is ", comp1 == comp2) // false
console.log("comp1 != comp2 is ", comp1 != comp2) // true
console.log("comp1 === comp2 is ", comp1 === comp2) // false
console.log("comp1 !== comp2 is ", comp1 !== comp2) // true
console.log("comp1 > comp2 is ", comp1 > comp2) // false
//when comp1 is 6 and comp2 is "6", value looks same but type is int and string
//that is the major diffrence b/w == and ===, == will give true, but === gives false

// Logical Operators
let x = 5;
let y = 6;
console.log(x<y && x==5)// And operator, here
// true and true will true and rest all false
console.log(x>y || x==5)// Or operator, here
// true and true will give true and anyone of them true, then true
// and in OR operator only false and false will give false.
console.log(!false)
console.log(!true)

// Comments
// This is a single line comment
/* This is a sample multiline comment and a tutorial
from 
codewithharry */

console.log("Chapter 2: Operators and expressions ends")

////////////////////////////