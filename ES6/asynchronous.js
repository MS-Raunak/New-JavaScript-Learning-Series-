//Asynchronous behaviour of JS
// setTimeout(function(){
//     console.log("task-3");//third executed
// }, 1000)
// console.log("task-1");  //first executed
// console.log("task-2"); //second executed

//Asynchronous behaviour of JS
/**
setTimeout(function(){
    console.log("task-3");//third executed
}) //after deleting timer output will be same
console.log("task-1");  //first executed
console.log("task-2"); //second executed


* setTimeout() is an asynchronous function that is always executed after the main thread has completed its 
  current tasks.

* When setTimeout() is called, it pushes the callback function into the event queue, regardless of whether 
  a delay time is specified or not.

* The callback function is then executed after the asynchronous tasks and the main thread have completed.
 * 
 */

//Handling Asynchronous code into Synchronous using Callback
function m(callback) {
    setTimeout(() => {
        console.log("Task-1");  //first executed
        callback();
    }, 1000);
}
   
function m2() {
    console.log("Task-2");  //2nd executed
    console.log("Task-3"); //3rd executed
    console.log("Task-4"); //4th executed
}

m(m2);