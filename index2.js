function myFunction(){
    document.getElementById("demo").innerHTML = "Hello!";
}

// console.log("Hello World");
// alert("me");
// document.write("this is document write")

// console.log("Hello World", 4 + 6, "Another log");
// console.warn("this is warning");
// console.error("This is an error");

var x = 10;
console.log(x);

var number1 = 34;
var number2 = 56;
console.log(number1 + number2);

// Booleans
var a = true;
var b = false;
console.log(a, b);

// var und = undefined;
var und; // even if like this, then undefined printed, cause no value inside
console.log(und);

var n = null; // null is printed, you are telling that there is nothing inside in variable
console.log(n);

//Arrays
// var arr = [1, 2, 3, 4, 5]
var arr = [1, 2, "bablu", 4, 5]
console.log(arr) // prints full array
// console.log(arr[0])

// Comparison Operators
var x = 34; // operand: 34 and 56, operator is +, etc
var y = 56;
console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);      