/**
 * Falsy Value:
 * ==============
 * When we converting some variable into boolean then it converts in false always is known as truthy values
 * EX:
 * 1)empty string(" ") 
 * 2)null 
 * 3)undefined
 * 4)0
 * Above all values always return false 
 * 
 * Truthy Value:
 * ==============
 * While converting a variable into boolean if variable return true then it's known as TRUTHY values.
 * EX: except falsy values all are truthy
 */

//empty string
let name="";//false
if (name) 
    console.log(name);

else
    console.log("If block failed because of falsy value");//true

//null
name=null
if (name) //false
    console.log(name);
else
    console.log("If block failed because of falsy value");//true

//undefined
let fname;
if (name) //false
    console.log(fname);
else
    console.log("If block failed because of falsy value");//true

//zero(0)
let num=0;
if (num) //false
    console.log(num);
else
    console.log("If block failed because of falsy value");


//Truthy
name="Chhaya";
if(name)
    console.log(`My name is ${name}`);//true
else
    console.log("I dont have any name");

