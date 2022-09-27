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
  Monika: 4
}
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

let name = "Harry"
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
let fr = "Raman" + "Shivika" + "Harry"
// console.log(fr[0])
// console.log(fr[1])
// console.log(fr[2])
// console.log(fr[3])
// fr[4]= "o" // This is not possible 
// console.log(fr)
// QuickQuiz: Use a for loop to print a string

for(let i in fr){
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

console.log("Arrays some more methods starts")

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

// let num1 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// num1.splice(2,3,1021,1022,1023)
// // from index 2 , delete 3 elements and add these 3 elements
// console.log(num1)

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
let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// console.log(num)
// let deletedValues = num.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
// console.log(num)
// console.log(deletedValues)

// let newNum = num.slice(3)
let newNum = num.slice(3, 5)
console.log(newNum)

console.log("Arrays some more methods ends")

//////////////////////////////















