// String: substr()
// The substr method extracts a substring from a string:
// let see = 'see and stop'.substr(0, 3);
// let and = 'see and stop'.substr(4, 3);
// let stop = 'see and stop'.substr(8);
// The first parameter specifies the position at which to start extracting. 
// The second parameter specifies the number of characters to extract. If the second 
// parameter is not set, all the characters from start position to the end of the string 
// are extracted.
// Exercise
// Write a function firstWord, taking a string and returning the first word 
// in that string. The first word are all characters up to the first space.

// Example: firstWord('see and stop') should return 'see'.

let saying = 'chill out'
function firstWord(saying) {
let space = saying.indexOf(' ');
return saying.substr(0, space);
}
console.log(firstWord(saying))

// The replace method replaces a substring with another:
// let str = 'JavaScript';
// let newstr = str.replace('Java', 'ECMA');
// 'Java' is replaced with 'ECMA'. Thus newstr has the value 'ECMAScript'. The 
// original string remains unchanged. Only the first occurrence is replaced:
// let newstr = 'Dada'.replace('a', 'i');
// newstr has the value 'Dida' and not 'Didi'.
// Exercise
// Write a function normalize, that replaces '-' with '/' in a date string.

// Example: normalize('20-05-2017') should return '20/05/2017'.

let date = '20-05-2017'
function normalize(date) {
let newDate = date.replaceAll('-', '/')
return newDate
}
console.log(normalize(date))

// Write a function toFahrenheit that converts a temperature from Celsius to Fahrenheit.

// Example: toFahrenheit(0) should return 32.

let celsius = 0
function toFahrenheit(celsius) {
   let fahrenheit = 1.8 * celsius + 32
       return fahrenheit
}

// Modulo
// Another arithmetic operator is modulo. It calculates the remainder of a 
// division and is represented by %.
// let x = 7 % 2;
// let y = 20 % 3;
// 7 divided by 2 is 3 with remainder 1. x is 1. 20 divided by 3 
// is 6 with remainder 2. y is 2.
// Exercise
// Write a function onesDigit that takes a natural number and 
// returns the ones digit of that number.

// Example: onesDigit(2674) should return 4.

function onesDigit(n) {
    return n % 10;
 }


// Just as in mathematics, the order of operations rules are valid in JavaScript.
// Multiplication and division are performed before addition and subtraction. With 
// parentheses you can specify the order of operations.
//  let x1 = 3 + 4 * 2;
//  let x2 = (3 + 4) * 2;
//  x1 is 11 and x2 is 14.
//  Exercise
//  Write a function mean that takes 2 numbers and returns their mean value.
 
//  Example: mean(1, 2) should return 1.5.

function mean(a,b) {
    return ( a + b) / 2
  }

//   Many mathematical functions are grouped together in the Math object. For example, 
//   Math.sqrt(x) returns the square root and Math.pow(x, y) calculates x to the power of y.
//   let y1 = Math.sqrt(9);
//   let y2 = Math.pow(10, 3);
//   y1 has the value 3 and y2 has the value 1000 (10³ = 10 * 10 * 10 = 1000).
//   Exercise
//   Write a function hypotenuse that calculates the length of the hypotenuse of a 
//   right triangle. The length of the two legs is passed to the function. Tip: In a right 
//   triangle the Pythagorean theorem is valid. If a and b are the lengths of the two legs and 
//   c is the length of the hypotenuse, the following is true: a² + b² = c². Since 3² + 4² = 5² 
//   applies, hypotenuse(3, 4) should return 5.  

function hypotenuse(a, b) {
    let c = Math.pow(a, 2) + Math.pow(b, 2)
       return c = Math.sqrt(c)
  }