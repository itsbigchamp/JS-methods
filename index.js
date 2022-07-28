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