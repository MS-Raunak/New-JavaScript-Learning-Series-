/*
Function
=========
- It is set of code which is used to perform some specific task.
- To execute the function, It is mandatory to call that function.
#there are 3 types of array in Js
1.Function Declaration
2.Function Expression 
3.Arrow Function
*/

//1.Function Declaration: we can call it's before creation
m1();
function m1() {
    console.log("Function Declaration");
}


//2.Function Expression: we can't call it's before creation

let m2 = function(){
    console.log("Function Expression");
}
m2();


//3.Arrow Function(Also known as Ananymous function): we can't call it's before creation
const c = () => {
    console.log("Arrow Function");
}
c();


