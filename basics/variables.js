/**
 * There are 3 way to variables in JS
 * 1) Using Var Keyword => It has Function-scoped or globally scoped, can be re-declared and updated.
 * 2) Using Let Keyword => It has Block-scoped, can be updated but not re-declared.
 * 3) Using Const Keyword => It has Block-scoped, cannot be reassigned ,
 *     but properties of objects and elements of arrays can be modified.
 * 
 * For at this time don't care about difference, You will get to know later soon
 */

// var name = "Ritesh";  
// console.log(name); //Ritesh
// var name = "Shanaya"; //here same variable 'name' , has been declared twice because of var type variables we can redeclare
// console.log(name); //Shanaya

// let age = 10;
// console.log(age);//10
// age=20;       //let type variable we can reassigned but cant be redeclare
// console.log(age);//20

// const nickname = "Chhaya";
// console.log(nickname);
// //nickname = "CHH";     //Throwing error bkg const type variable neihther redeclare nor reassigned


var a=10;
var b=20;

console.log("a: ", a); //10
console.log("a+b: ", a+b); //30

