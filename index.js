// 1. Ways to print in JavaScript
// console.log("Hello World");
// alert("me");
// document.write("this is document write")

// 2. Javascript console API
// console.log("Hello World", 4 + 6, "Another log");
// console.warn("this is warning");
// console.error("This is an error");

// 3. JavaScript Variables
// What are Variables? - Containers to store data values



/*
multi 
line 
commment
*/

var number1 = 34;
var number2 = 56;
console.log(number1 + number2);

// 4. Data types in JavaScript
// Numbers
var num1 = 455;
var num2 = 56.76;

// String
var str1 = "This is a string";
var str2 = 'This is also a string';
console.log(str1)


// Objects
var marks = {
    ravi: 34,
    shubham: 78,
    harry: 99.977
}
console.log(marks);

// Booleans
var a = true;
var b = false;
console.log(a, b);


// var und = undefined;
var und; // even if like this, then undefined printed, cause no value inside
// console.log(und);

var n = null; // null is printed, you are telling that there is nothing inside in variable
// console.log(n);

/*
At a very high level, there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects
*/

// var arr = [1, 2, 3, 4, 5]
var arr = [1, 2, "bablu", 4, 5]
console.log(arr) // prints full array
// console.log(arr[0])

// Operators in JavaScript
// Arithmetic Operators
var a = 100;
var b = 10;
console.log("The value of a + b is ", a + b);
console.log("The value of a - b is ", a - b);
console.log("The value of a * b is ", a * b);
console.log("The value of a / b is ", a / b);

// Assignment Operators
var c = b;
c += 2;
// c -= 2; // c = c - 2;
// c *= 2;
// c /= 2;
console.log(c);

// Comparison Operators
var x = 34; // operand: 34 and 56, operator is +, etc
var y = 56;
console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical Operators

// Logical and
console.log(true && true) // true
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// Logical or
console.log(true || true) // true
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// Logical not
console.log(!false);
// console.log(!true);

// Function in JavaScript
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
// DRY = Do not repeat yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
console.log(c1, c2);


// In inspect element, console.log(3), will get 3 in blue, which is number
// same console.log('3'), will get in black, which is string

// Conditionals in JavaScript

var age = 41;
// Single if statement
if (age > 18) {
    console.log('You can drink rasna water');
}
// if - else statement
// if(age > 18){
//     console.log('You can drink rasna water');
// }
// else{
//     console.log('You cannot drink rasna water');
// }

age = 25;
// if-else Ladder
if (age > 32) {
    console.log("You are not a kid");
}
else if (age > 26) {
    console.log("Bachhe nahi rahe");
}
else if (age > 22) {
    console.log("Yes Bachhe nahi rahe");
}
else if (age > 18) {
    console.log("18 Bachhe nahi rahe");
}
else {
    console.log("Bachhe rahe");
}
console.log("End of ladder");


//Loops

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
for(var i=0; i<arr.length;i++){
    if(i==2){
        // break;
        continue;
    }
    console.log(arr[i])
}

// arr.forEach(function (element) {
//     console.log(element);
// })

// let j = 0; // block level scope
// const ac = 0;
// ac = ac + 1; // assignment error to const

// let j = 0;
// while(j < arr.length){ // 0 < 7, yes, prints, arr of above code is reffred
//     console.log(arr[j]);
//     j++;
// }

// do {
//     console.log(arr[j]); // check only once in do loop
//     j++;
// } while (j < arr.length);

let myArr = ["Fan", "Camera", 34, null, true];
// array methods
console.log(myArr.length);
// myArr.pop();
// myArr.push("harry");
// myArr.shift(); // (4) ['Camera', 34, null, true], first element goes out
// const newLen = myArr.unshift("Harry")
// console.log(newLen); // (6) [' Harry', 'Fan', 'Camera', 34, null, true]
console.log(myArr);

// String Methods in JavaScript
let myLovelyString = "Harry is a good boy good good Harry";
console.log(myLovelyString.length);
console.log(myLovelyString.indexOf("good"));
// console.log(myLovelyString.lastIndexOf("good"));
// console.log(myLovelyString.slice(0,3)); // Har
// console.log(myLovelyString.slice(1,4)); // arr
// d = myLovelyString.replace("Harry", "Rohan");
// d = myLovelyString.replace("good", "bad");
// console.log(d, myLovelyString);

let myDate = new Date();
console.log(myDate);
console.log(myDate.getTime()); // time in seconds
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// DOM Manipulation
let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName("container");
console.log(elemClass);
// elemClass[0].style.background = "yellow";
// 0 is click me starting point so 0
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
console.log(elem.innerHTML);
console.log(elem.innerText); 
// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText); 

tn = document.getElementsByTagName('div')
console.log(tn);
createdElement = document.createElement('p')
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b')
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);

// removeChild(element); --> removes an element

// Selecting using Query
sel = document.querySelector('.container')
console.log(sel)
// sel = document.querySelectorAll('.container')
// console.log(sel)

function clicked(){
    console.log('The button was clicked');
} // when button clicked, this will be displayed in console

window.onload = function(){
    console.log('The document was loaded');
} // clicked on window, this will display text

// Events in JS
firstContainer.addEventListener('click', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>"
    console.log('Click on container');
})

// firstContainer.addEventListener('mouseover', function(){
//     console.log('Mouse on container');
// }) // mouseover, means mouse came on that

// firstContainer.addEventListener('mouseout', function(){
//     console.log('Mouse out of container');
// }) // mouseover, means mouse came out

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on Container");
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Mouse down when clicked on Container");
// })


// Arrow Functions
// function summ(a, b){
//     return a+b;
// }

summ = (a, b) =>{
    return a+b;
}


// SetTimeout and setinterval
logKaro = () =>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Fired</b>"
    console.log('I am your log');
}
// SetTimeout and setinterval
// clr = setTimeout(logKaro, 5000);
// clr = setInterval(logKaro, 2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// JavaScript localStorage
// localStorage.setItem('name', 'harry') 
// localStorage 
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();

// Json 
// obj = {name: "harry", length: 1, a: {this: 'tha"t'}}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
// console.log(parsed);



