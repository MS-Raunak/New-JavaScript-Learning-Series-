/**
 * setTimeOut() is an Asynchronous function which takes one callback
 * and execute the function after given period of time.
 * It can be execute at most once.
 */

console.log("Task Start");

setTimeout(()=>{
    console.log("task-1");
}, 1000)

setTimeout(function(){
    console.log("task-2");
}, 1500)

setTimeout(foo, 3000);
function foo() {
    console.log("Task Completed");
}

