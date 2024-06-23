/**
 * Rest Parameter
 * =============
 * The rest parameter in JavaScript, introduced in ES6 (ECMAScript 2015), provides a concise way 
 * to handle an indefinite number of arguments passed to a function.
 * The rest parameter is denoted by three dots (...) followed by a chosen identifier
 */

function sum(...nums) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sum(...numbers)); // Equivalent to sum(1, 2, 3, 4, 5)