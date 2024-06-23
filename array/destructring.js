/**
 * Destructuring: is the mechanism to extracting value from array or object and 
 * assigning to the convinient variables
 */
const colors = ["red", "blue", "white", "green", "yellow"];
//array destructuring
//[color1, color2] =  colors;
//console.log(color1, color2);//red blue

const anotherColors = ["red", "blue", "white", "green", "yellow"];
[color1, color2, ...extraColors] =  colors;
console.log(color1, color2);//red blue
console.log(extraColors);//[ 'white', 'green', 'yellow' ]
