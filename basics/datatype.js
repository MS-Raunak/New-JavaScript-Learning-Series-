/**
 * Data type in Js
 * ===============
 * 1)Primitive => Number, String, Boolean, Null, Undefined, BigInt, Symbol
 * 2) Non-Primitive=>Array, Objects
 */

//Number
let a=10;
console.log(typeof(a));//number
a=10.2;
console.log(typeof(a));//number

//String: In Js we can write a string either within double quotes or single quotes
let str = "Chhaya";
console.log(typeof(str));//string
str = 'Chhaya';
console.log(typeof(str));//string
str = 'r';
console.log(typeof(str));//string

//Boolean
console.log(typeof(true));//boolean

//Undefined: varible which is only declared but not initialized
let num;
console.log(typeof(num)); //undefined

//Null
num = null;
console.log(typeof(num)); //object(Non-primitive): this is a bug of javascript

//BigInt: to store longest value
let val = BigInt(134566666666634212234); //First way to assigne bigint val
let val1 = 445565652n; // //Second way to assigne bigint val

console.log(val + val1);
