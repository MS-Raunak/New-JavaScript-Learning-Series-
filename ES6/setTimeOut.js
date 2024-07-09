//Ashyncronous behaviour
/*setTimeout(()=>{
    console.log("timer");  //wait 1s to execute//second it will execute
}, 1000)

function m() {
    console.log("task"); //first it will execute
}
m();
*/

//Handle Asynchronous behaviour using callback(converting asynchronous to synchronous)
function m1(callback){
    setTimeout(()=> {
        console.log("timer");  //execution-1(wait 1s and display timer)
        callback();
    }, 1000)
}

function m2() {
    console.log("task-1");//execution-2
    console.log("task-2");//execution-3
    console.log("task-3");//execution-4
}
m1(m2);
