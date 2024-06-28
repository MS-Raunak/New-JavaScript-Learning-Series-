/**
 * What is String?
 * String is group of character which is used to reperesent and manipulate sequence of characters.
 * In JS, We can enclosed the group of character or string inside a double quote or single quote.
 * We can create an string object either by using double/single quote and or also using new keyword
 */

const str = 'Hello Chhaya!';
const str2 = "Hello Chhaya!";
const str3 = new String("Hello Chhaya");
console.log(str);
// console.log(str2);
// console.log(str3);

// //length: find length of string
// console.log(str.length);

// //charAt(idx): used to return char presented in given index
// console.log(str.charAt(0)); //H

// //charCodeAt(idx) : return char ascii value on given index
// console.log("ABC".charCodeAt(0)); //65

// //includes():- checks whether the given value present or not in string and return boolean value
// console.log(str.includes("o")); //true
// console.log(str.includes("B")); //false

// //indexOf(): return index val if given char found otherwise return -1;
// console.log(str.indexOf("H"));//0
// console.log(str.indexOf("B"));//-1

//lastIndexOf(): same as indexOf() but it will search from last
console.log(str.lastIndexOf("a"));//11
console.log(str.lastIndexOf("B"));//-1



