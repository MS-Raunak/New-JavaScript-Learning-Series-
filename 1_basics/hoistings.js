/**
 * Hoisting
 * =========
 * hoisting is a behaviour in javascript which means some variables and some functions
 * are accessible before it's creation
 * 
 * In JS, var type variable and function declaration are hoisted.
 * Var type variable have assigned undefined 
 * function declaration can call on the top of declaration
 * 
 * let and const are not hosited, similerly function expression and arrow function are not hoisted 
 */

//Example
var c;
console.log(c);//undefined(hoisted)

m1();
function m1() {
    console.log("hoisted");
}
