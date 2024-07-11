/**
 * setInterval() is an asynchronous function which accepts one
 * callback function and execute that function every interval of given time.
 * 
 */
let count=0;
// let interval = setInterval(()=>{
//     console.log(`task- ${++count}`);
// }, 1000)


/**
 * clearInterval(): is a function which terminate the execution of callback fun of 
 * setInterval.
 */
const interval = setInterval(counter, 1000);
function counter() {
    if (count>=10) {
        clearInterval(interval);
        console.log("Task completed");
    }
    else{
        console.log(`task-${++count}`);
    }
}
