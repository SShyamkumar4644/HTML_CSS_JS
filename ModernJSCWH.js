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

// console.log("Chapter 2: Practice Sets begins")

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

// console.log("Function starts")

// const hello = () => {
//   console.log("Hey how are you. I am toh fine yaar")
//   return "hi"
// }

// function onePlusAvg(x, y) {
//   return 1 + (x + y) / 2
// }

// const sum = (p, q) => {
//   return p + q
// }

// let a = 1;
// let b = 2;
// let c = 3;
// let v = hello();
// console.log(v)
// hello();
// console.log("One plus Average of a and b is ", onePlusAvg(a, b))
// console.log("One plus Average of b and c is ", onePlusAvg(b, c))
// console.log("One plus Average of a and c is ", onePlusAvg(a, c))
// console.log(sum(9, 7))

// console.log("Functions ends")

/////////////////////////////

// console.log("Chapter 3 practice sets starts")

let marks = {
  harry: 90,
  shubham: 9,
  lovish: 56,
  Monika: 4,
};
// Problem No 1
for (let i = 0; i < Object.keys(marks).length; i++) {
  // console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

// Problem No 2
// for (let key in marks) {
//   console.log("The marks of " + key + " are " + marks[key])
// }
//This for in loop creates less code
//but same output, which output in
//problem gives same output but //lengthy codes
//prints the keys and also prints
//the marks of individual keys

// Problem No 3
// let cn = 43
// let i
// while (i != cn) {
//   console.log("Try again")
//   i = prompt("Enter a number")
// }
// console.log("You have entered a correct number")

// Problem No 4
// const mean = (a, b, c, d) => {
//   return (a + b + c + d) / 4
// }

// console.log(mean(4, 5, 6, 7))
// console.log("Chapter 3 practice sets ends")

////////////////////////////

// console.log("Strings starts")

// let name = "Harry"
// console.log(name.length)
// console.log(name[0])
// console.log(name[1])
// let friend = 'Prakash'
// console.log(friend)
// let myfriend = "Shubh' // Dont do this
// console.log(myfriend)

// Template literals
// let boy1 = "Pramod"
// let boy2 = "Nikhil"
// Nikhil is a friend of Pramod
// let sentence = `${boy2} is a friend of ${boy1}`
// console.log(sentence)

// Escape Sequence Characters
// let fruit = 'Bana\'na'
// console.log(fruit)
// let fruit = "Bana\"na"
// console.log(fruit)

//Backticks is String interpolation //concept itself

// console.log("Strings ends")

///////////////////////////////

// console.log("Strings methods starts")

let name = "Harry";
// console.log(name.length)

// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.slice(2, 4))
// console.log(name.slice(2))
// console.log(name.replace("Har", "Per"))
// let friend = "Naman"
// console.log(name.concat(" is a friend of ", friend, " Ok"))
// let friend2 = "      Meena        "
// console.log(friend2)
// console.log(friend2.trim())
let fr = "Raman" + "Shivika" + "Harry";
// console.log(fr[0])
// console.log(fr[1])
// console.log(fr[2])
// console.log(fr[3])
// fr[4]= "o" // This is not possible
// console.log(fr)
// QuickQuiz: Use a for loop to print a string

for (let i in fr) {
  // console.log(fr[i])
}

// console.log("Strings methods ends")

////////////////////////

// console.log("Practice Strings starts")

// Chapter 4 - Practice Set
// Problem 1
// let str = "Har\""
// console.log(str.length)

// Problem 2
// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const word = 'fox2';
// console.log(sentence.includes(word))
// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

// Problem 3
// console.log(word.toLowerCase())
// console.log(word.toUpperCase())

// Problem 4
// let str2 = "Please give Rs 1000"
// let amount = Number.parseInt(str2.slice(15))
// console.log(amount)
// console.log(typeof amount)

// Problem 5
// let friend = "Deepika"
// friend[3] = "R"
// console.log(friend) // friend is not changed, because string is immutable

// console.log("Practice Strings ends")

/////////////////////////////////

// console.log("Chapter 5 Arrays starts")

// let marks_class_12 = [91, 82, 63, 84, false, "Not Present"]
// console.log(marks_class_12[0])
// console.log(marks_class_12[1])
// console.log(marks_class_12[2])
// console.log(marks_class_12[3])
// console.log(marks_class_12[4])
// console.log(marks_class_12[5])
// console.log(marks_class_12[6]) // Will be undefined because index 6 does not exist
// console.log("The length of marks_class_12 is", marks_class_12.length)
// marks_class_12[6] = 89 // Adding a new value to the array
// marks_class_12[0] = 96 // Changing the value of an array
// console.log(marks_class_12)
// console.log(typeof marks_class_12)

// console.log("Chapter 5 Arrays ends")

//////////////////////////

// console.log("Arrays methods starts")

// Array Methods
// let num = [1, 2, 3, 34, 4]
// let b = num.toString() // b is now a string
// console.log(b, typeof b)
// let c = num.join(" and ")
// console.log(c, typeof c)
// let r = num.pop() // pop returns the popped element
// console.log(num, r)
// let r = num.push(56) // push returns the new array length
// console.log(num, r)
// let r = num.shift()
// console.log(r, num) // Removes an element from the start of the array

// let r = num.unshift(78)
// console.log(r, num)
// console.log(r)

// console.log("Arrays methods ends")

///////////////////////////

// console.log("Arrays some more methods starts")

// let num =[1,2,3,4,5,6,7,8,9]
// console.log(num)
// console.log(num.length)
// delete num[0]
// console.log(num)
// console.log(num.length)
//even if one item delted, length //of the array remains same

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
// let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]

// let newArray = num.concat(num_more, num_even_more)
// console.log(newArray)
// console.log(num, num_more)

// let compare = (a, b) =>{
//   return a - b
// }
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// num.sort(compare)
// num.reverse()
// console.log(num)
//it is sorted in alphabet format, //numbers are considered as strings //and sorted, if num.sort()

// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// num.splice(2,3,1021,1022,1023)
//from index 2 , delete 3 elements and add these 3 elements
// console.log(num)

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
// let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]
// console.log(num.length)
// delete num[0]
// console.log(num.length)

// let newArray = num.concat(num_more, num_even_more)
// console.log(newArray)
// console.log(num, num_more)

// sort method
// let compare = (a, b)=>{
//   return b - a
// }
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// num.sort(compare)
// num.reverse()
// console.log(num)

// Splice and Slice
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// let deletedValues = num.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
// console.log(num)
// console.log(deletedValues)

// let newNum = num.slice(3)
// let newNum = num.slice(3, 5)
// console.log(newNum)

// console.log("Arrays some more methods ends")

//////////////////////////////

// console.log("Loops with arrays starts")

// let num = [3, 5, 1, 2, 4]

// for(let i=0; i<num.length;i++){
//   console.log(num[i])
// }

// ForEach Loop
// num.forEach((element) => {
//   console.log(element * element)
// })

// Array.from
// let name = "Harry"
// let arr = Array.from(name)
// console.log(arr)

// for...of
// for (let item of num){
//   console.log(item)
// }

// for...in
// for (let i in num){
//   console.log(num[i])
// }

// console.log("Loops with arrays ends")

////////////////////////////

// console.log("map filter reduce starts")

// let arr = [45, 23, 21]
// let a = arr.map((value) =>{
//   console.log(value)
//   return value
// })

// console.log(a)

//map creates new array, but foreach iterates in same array

// let arr2 = [45, 23, 21, 0, 3, 5]
// let a2 = arr2.filter((a) =>{
//   return a<10
// })
// console.log(a2)
//this filter method returns which numbers are less than 10 only
//after this, it wont modify the original array

// let arr3 = [1,2,3,5,2,1]
// let newarr3 = arr3.reduce((h1, h2)=>{
//   return h1 + h2
// })
// console.log(newarr3)

// const numbers = [1,2,3,4,5]
// console.log(numbers)
// console.log(numbers.splice(2,1,23,24))
// console.log(numbers)
// 1+2 =3, you get value as 3
// do same thing for next value
// you got value as 3, next value is 3, 3+3=6
//next 6+5=11
//next 11+2=13
//last 13+1=14

//FILTER RETURNS VALUE
//MAP AND REDUCE RETURNS ARRAY

// let arr = [45, 23, 21]
// // Array map method
// let a = arr.map((value, index, array) => {
//   // console.log(value, index, array)
//   return value + index
// })
// // console.log(arr)

// Array filter method
// let arr2 = [45, 23, 21, 0, 3, 5]
// let a2 = arr2.filter((a) => {
//   return a < 10
// })
// console.log(a2, arr2)

// Array reduce method
// let arr3 = [1, 2, 3, 5, 2, 1]
// const reduce_func = (h1, h2) => {
//   return h1 + h2
// }
// let newarr3 = arr3.reduce(reduce_func)
// console.log(newarr3)

// console.log("map filter reduce ends")

/////////////////////////////////

// console.log("JS Console object starts")

// console.log("log")
// console.info("info")
// console.warn("warn")
// console.error("err")
// console.assert("err" != false)
// console.assert("err" == false)

// console.time("forLoop")

// for (let i = 0; i < 500; i++) {
//   console.log(233)
// }

// console.timeEnd("forLoop")

// console.time("whileLoop")

// let i = 0;
// while (i < 500) {
//   console.log(233)
//   i++;
// }

// console.timeEnd("whileLoop")

// console.log("JS Console object ends")

////////////////////////////////////////////////

// console.log("setTimeout and setInterval starts");

// alert("hello")

// setTimeout(function() {
//   alert("I am inside setTimeout")
// }, 2000)
//this is used to display output after some time

// setTimeout(function(){
//   alert("running after 2 seconds")
// }, 2000)

// let a = setTimeout(function() {
//   alert("I am inside setTimeout")
// }, 2000)
//this is used to display output after some time

// let b = prompt("Do you want to run the settimout?")
// if ("n" == b) {
//   clearTimeout(a)
// }
//this will show you the prompt whether you want to run setTimeout
//if no type n then it will not show the output which shows
//after 2 seconds

// clearTimeout(a)//stops execution of setTimeout
// console.log(a)// you will get 1 as output in console cause
//it is showing its ID

//setTimeout: execute after sometime
//setInterval: execute after after time, like infinite loop

// setInterval(function() {
//   alert("running continous every 3 seconds")
// }, 3000)

// const sum = (a, b, c) => {
//   console.log("Yes I am running " + (a + b + c))
//   a + b
// }

// setTimeout(sum, 1000, 1, 2, 7)

// console.log("setTimeout and setInterval ends")

/////////////////////////////////

// console.log("browser events starts")

// console.log("Check notes in ModernJSCWH.html file")

// console.log("browser events ends")

///////////////////////////////////////

// console.log("Walking the DOM starts")

//you can't do DOM manipulation without html file

//document.head
//document.title
//document.body
//document.documentElement
//typeof document.title
//Do these things in any websites you go in, example: codewithharry.com

// console.log("Walking the DOM ends")

////////////////////////////

// console.log("accessing children of an element starts")

// console.log(document.body.lastChild)
// let arr = Array.from(document.body.childNodes)
// console.log(arr)
// console.log(document.body.childNodes)

// console.log(document.body.firstChild)

// console.log("accessing children of an element ends")

///////////////////////////////////

// console.log("callbacks starts");

//Synchronous programming: executes code line by line
//execute all lines in order to see output
// let a = prompt("enter your name")
// let b = prompt("enter your age")
// console.log("Hey " + a + "and your age is " + b);

//Asynchronous programming: first start will print, then end will
//print and after 3 seconds I'm running wil be printed
//setTimeout will be running in background, and after 3 second
//setTimeout will show output
// console.log("start")
// setTimeout(function(){
//   console.log("I'm running")
// }, 3000);
// console.log("end")

//Callbacks, final code
// function loadScript(src, callback) {
//   var script = document.createElement("script");
//   script.src = src;
//   script.onload = function () {
//     console.log("Loaded script with SRC: " + src);
//     callback(null, src);
//   };
//   script.onerror = function () {
//     console.log("Error loading script with SRC: " + src);
//     callback(new Error("Src got some error"));
//   };
//   document.body.appendChild(script);
// }

// function hello(error, src) {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   alert("Hello World!" + src);
// }

// function goodmorning(error, src) {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   alert("Good morning" + src);
// }

// loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",
//   goodmorning
// );
//this code tells that when you load this boostrap script along with that
//after loading the script, execute the function also, lets say goodmorning function
//two functions are created, run anyone of them, your choice
//now in line 841, loadcript will be exceute boostap script code, along with that
//it will call the function hello, it will show the alert prompt
//in functionloadscript, mention callback, pass name as function,

// next callback must print something,
// function loadScript(src, callback) {
//   var script = document.createElement("script");
//   script.src = src;
//   script.onload = function () {
//     console.log("Loaded script with SRC: " + src);
//     callback(src);
//   };
//   document.body.appendChild(script);
// }
// function hello(src){
//   alert("hello world" + src);
// }

// function goodmorning(src){
//   alert("goodmorning" + src);
// }

// loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",
//   hello
// );

//print the script code along with function

// function loadScript(src, callback){
//   var script = document.createElement("script");
//   script.src = src;
//   script.onload = function() {
//     console.log("Loaded script with SRC: " + src)
//     callback(src);/  print src also
//   }
//   document.body.appendChild(script);
// }
//passing function as argument

//error handling
// function loadScript(src, callback){
//   var script = document.createElement("script");
//   script.src = src;
//   script.onload = function() {
//     console.log("Loaded script with SRC: " + src)
//     callback(src);
//   }
//   script.onerror = function() {
//     console.log("Error loading script with SRC: " + src);
//     callback(new Error("Src got some error"))
//   }
//   document.body.appendChild(script);
// }

// function hello(src){
//   alert("hello world" + src);
// }

// function goodmorning(src){
//   alert("goodmorning" + src);
// }

// loadScript("https://cdn.jsdelivr.bgrshbrsgngrnet/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", hello)
//type something to display error for example in loadscript

//error handling more
// function loadScript(src, callback){
//   var script = document.createElement("script");
//   script.src = src;
//   script.onload = function() {
//     console.log("Loaded script with SRC: " + src)
//     callback(null, src);
//     //null cause if no error display null, if code success if no error
//   }
//   script.onerror = function() {
//     console.log("Error loading script with SRC: " + src);
//     callback(new Error("Src got some error"))
//   }
//   document.body.appendChild(script);
// }

// function hello(error, src) {
//   if (error) {
//     console.log(error)
//     return
//   }
//   alert('Hello World!' + src);
// }

// function goodmorning(src){
//   alert("goodmorning" + src);
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", hello)

// console.log("callbacks ends");

///////////////////////////////////////////////////////////

// console.log("Callback Hell & Pyramid of Doom starts")

// Callbacks
// function loadScript(src, callback) {
//   var script = document.createElement("script");
//   script.src = src;
//   script.onload = function() {
//           console.log("Loaded script with SRC: " + src)
//           callback(null, src);
//   }
//   script.onerror = function() {
//           console.log("Error loading script with SRC: " + src);
//           callback(new Error("Src got some error"))
//   }
//   document.body.appendChild(script);
// }

// function hello(error, src) {
//   if (error) {
//           console.log(error)
//           return
//   }
//   alert('Hello World!' + src);
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
//   if (error) {
//           console.log(error)
//           sendEmergencyMessageToCeo();
//           return
//   }
//   loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap2.bundle.min.js", function goodmorning(error, src) {
//           if (error) {
//                   console.log(error)
//                   sendEmergencyMessageToCeo();
//                   return
//           }
//           loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap3.bundle.min.js", function goodmorning(error, src) {
//                   if (error) {
//                           console.log(error)
//                           sendEmergencyMessageToCeo();
//                           return
//                   }
//                   loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap4.bundle.min.js", function goodmorning(error, src) {
//                           if (error) {
//                                   console.log(error)
//                                   sendEmergencyMessageToCeo();
//                                   return
//                           }
//                           loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap5.bundle.min.js", function goodmorning(error, src) {
//                                   if (error) {
//                                           console.log(error)
//                                           sendEmergencyMessageToCeo();
//                                           return
//                                   }
//                                   loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap6.bundle.min.js", function goodmorning(error, src) {
//                                           if (error) {
//                                                   console.log(error)
//                                                   sendEmergencyMessageToCeo();
//                                                   return
//                                           }
//                                           loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap7.bundle.min.js", function goodmorning(error, src) {
//                                                   if (error) {
//                                                           console.log(error)
//                                                           sendEmergencyMessageToCeo();
//                                                           return
//                                                   }
//                                                   loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap8.bundle.min.js", function goodmorning(error, src) {
//                                                           if (error) {
//                                                                   console.log(error)
//                                                                   sendEmergencyMessageToCeo();
//                                                                   return
//                                                           }
//                                                           loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap9.bundle.min.js", function goodmorning(error, src) { })
//                                                   })
//                                           })
//                                   })
//                           })
//                   })
//           })
//   })
// })
// Chintu

// console.log("Callback Hell & Pyramid of Doom ends")

/////////////////////////////////////

// console.log("Promises starts")

//zomato will notify that order will be delievered in 30 mins, if late
//also it will be notified
//Alert in Nodejs prints in console

// let promise = new Promise(function(resolve, reject) {
//   alert("Hello")
//   resolve(56)
// })

// console.log(promise)

// console.log("Hello One")
// setTimeout(function() {
//   console.log("Hello Two in 2 seconds")
// }, 2000)

// console.log("My name is " + "Hello Three")
// console.log(promise)

// Fetch google.com homepage  ==> console.log("google.com homepage done")
// Fetch data from the data api
// Fetch pictures from the server
// Print downloading
// Rest of the script

// console.log("Promises ends")

///////////////////////////////////////

// console.log("Promise .then() and .catch() starts")

// let p = new Promise((resolve, reject)=>{
//   console.log("promise is pending")
//   setTimeout(()=>{
//     // console.log("I am a promise and I am fulfilled")
//     console.log("I am a promise and I am rejected")
//     // resolve(true)
//     reject(new Error("I am an error"))
//   }, 5000)
// })

// console.log(p)

// let p1 = new Promise((resolve, reject)=>{
//   console.log("promise is pending")
//   setTimeout(()=>{
//     // console.log("I am a promise and I am fulfilled")
//     console.log("I am a promise and I am rejected")
//     resolve(true)
//     // reject(new Error("I am an error"))
//   }, 5000)
// })

// let p2 = new Promise((resolve, reject)=>{
//   console.log("promise is pending")
//   setTimeout(()=>{
//     // console.log("I am a promise and I am fulfilled")
//     console.log("I am a promise and I am rejected")
//     // resolve(true)
//     reject(new Error("I am an error"))
//   }, 5000)
// })

// console.log(p1, p2)

// p1.then((value)=>{
//   console.log(value)
// })

// p2.catch((error)=>{
//   console.log(error)
// })

// console.log("Promise .then() and .catch() ends")

////////////////////////////////////

// console.log("Promise API starts")

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//           resolve("Value 1");
//   }, 11000);
// });

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//           resolve("Value 2");
//           // reject(new Error("Error"));
//   }, 2000);
// });

// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//           resolve("Value 3");
//   }, 3000);
// });

// p1.then((value) => {
//         console.log(value)
// })

// p2.then((value) => {
//         console.log(value)
// })

// p3.then((value) => {
//         console.log(value)
// })

// let promise_all = Promise.all([p1, p2, p3])
//prints the value only after 3seconds, that is which has highest timings
//p1 has 1s. p2 2s, p3 3s, so after 3s, you will get output
//nut any of them has reject(new Error("Error"));, then whole array will
//throw error, and stop executing, it will be rejected, to overcome this use
//allSettled, it will show the status if it is fulfilled or rejected.

// let promise_all = Promise.allSettled([p1, p2, p3])
//even if it is rejected the code will execute and show status of each

// let promise_all = Promise.race([p1, p2, p3])
//this will print which value will print the first and faster
//here p1 is 1s, p2 2s, p3 3s, so p1 will print value 1

// let promise_all = Promise.resolve(6)
// let promise_all = Promise.reject(new Error("Hey"))
// promise_all.then((value) => {
//   console.log(value)
// })

// console.log("Promise API ends")

////////////////////////////////////////////////

// console.log("async await starts")

// async function harry(){
//   let delhiWeather = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve("27 deg")
//     }, 3000)
//   })
//   let bangaloreWeather = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve("21 deg")
//     }, 5000)
//   })

//   // delhiWeather.then(alert)
//   // bangaloreWeather.then(alert)
//   console.log('Fetching delhi weather please wait...')
//   let delhiW = await delhiWeather
//   console.log("Fetched delhi weather: " + delhiW)

//   console.log('Fetching bangalore weather please wait...')
//   let bangaloreW = await bangaloreWeather
//   console.log("Fetched bangalore weather: " + bangaloreW)
//   return [delhiW, bangaloreW]
//   //till you get delhi weather, it wont proceed next

// }

// const cherry = async () => {
//   console.log("Hey I am cherry and I am not waiting ")
// }
// // console.log("Welcome to weather control room")
// let a = harry()
// let b = cherry()
// //you have twon functions here these will parellel and doesn't wait, harry will print
// //alongside with cherry, you can do it to stop like first execute harry, then print cherry
// //use async await for that
// a.then((value)=>{
//   console.log(value)
// })
// console.log(a)

//   const cherry = async () => {
//     console.log("Hey I am cherry and I am waiting ")
//   }

//   const main1 = async () => {
//     console.log("Welcome to weather control room")
//     let a = await harry()
//     let b = await cherry()
//   }
// main1()
//in this main1 function we are creating async await function so that cherry()
//need to wait until harry() function finishes executing
// console.log("async await ends")

////////////////////////////////////

// console.log("Finally clause starts");

// try{
//   let a =0;
//   console.log(program)
//   console.log("program ran successfully")
// }

// catch(err){
//   console.log("This is an error")
//   console.log(p)
// }
// finally{
//   console.log("I am a good boy")
// }
//this block will exceute even if error occurs always even no erro also executes

// const f = () => {
//   try {
//     let a = 0;
//     // console.log(program)
//     console.log(a);
//     console.log("Program ran successfully");
//     return;
//   } catch (err) {
//     console.log("This is an error");
//     console.log(p);
//   } finally {
//     console.log("I am a good boy");
//     // Close the file
//     // Exit the Loop
//     // Write to the log file
//   }
// };

// f();
// console.log("End");

// console.log("Finally clause ends");

//////////////////////////////////

// console.log("Error Handling: try and catch starts");

// setTimeout(() => {
//   console.log("Hacking wifi.... Please wait...");
// }, 1000);

// try {
//   console.log(rahul);
// } catch (err) {
//   console.log("Balle balle");
// }
// //even if you get error and you wish code execution does not want to stop
// //use try catch block
// //try catch works synchronously

// setTimeout(() => {
//   console.log("Fetching username and password.... Please wait...");
// }, 2000);

// setTimeout(() => {
//   console.log("Hacking Rahul's facebook id.... Please wait...");
// }, 3000);

// setTimeout(() => {
//   console.log(
//     "Username and password of Rahul (+919356700001) fetched.... Please wait..."
//   );
// }, 4000);



// setTimeout(()=>{
//   console.log("Hacking wifi.... Please wait..." ) 
//   }, 1000)
  
//   try{
//           setTimeout(()=>{ 
//                   console.log(rahul)  
//           }, 100)
//   }
//   catch(err){
//           console.log("Balle balle")
//   }
  
  
//   setTimeout(()=>{ 
//           console.log("Fetching username and password.... Please wait..." )
//   }, 2000) 
  
//   setTimeout(()=>{ 
//   console.log("Hacking Rahul's facebook id.... Please wait..." )
//   }, 3000) 
  
//   setTimeout(()=>{ 
//   console.log("Username and password of Rahul (+919356700001) fetched.... Please wait..." )
//   }, 4000) 


// console.log("Error Handling: try and catch ends");


///////////////////////////////////////////////

// console.log("Fetch API starts")

// let p = fetch("https://goweather.herokuapp.com/weather/Ny")
//this is a random api to fetch to check the process of data fetching from the
//internet, you can find diffrent links in google
// p.then((response) => {
//         console.log(response.status)
//         console.log(response.ok)
//         console.log(response.headers)
        // console.log(response.text())
        //you will get body stream already read, either you run json or text, since
        //you ran json, you will get error in text()
        // return response.json()
// }).then((value2) => {
//         console.log(value2)
// })
//getting response is a two stage process, to check that its by status and ok
// console.log("Fetch API ends")

////////////////////////////////////////

console.log("Sending POST request with Fetch API starts")



console.log("Sending POST request with Fetch API ends")
