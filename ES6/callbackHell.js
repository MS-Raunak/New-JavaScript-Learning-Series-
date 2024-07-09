/**
 * Calling the function again and again in nested way is called callback hell

function msg(callback) {
    setTimeout(()=>{
        console.log("fun-1");//2
        callback();
    }, 3000)
}

function msg2(callback) {
    setTimeout(()=>{
        console.log("fun-2");//3
        callback();
    }, 2000)
}

function msg3() {
    setTimeout(()=>{
        console.log("fun-3");//4
    }, 1000)
}

msg(function() {
    msg2(function() {
        msg3();
    })
})

console.log("Program ends");  //1
 */


/**
 * when msg() called then setTimeOut() executed which pushes callback into the event queue
 * so he synchronous code first will get executed and once after the  all asynchronous code will
 * get executed sequentially one after another
 * So expected output,
 * ===================
 * Program ends
    fun-1
    fun-2
    fun-3
 */

//Handling Asynchronous Behaviour using callback hell
/**
 * Calling the function again and again in nested way is called callback hell
 */
function msg(callback) {
    setTimeout(()=>{
        console.log("fun-1");//1
        callback();
    }, 3000)
}

function msg2(callback) {
    setTimeout(()=>{
        console.log("fun-2");//2
        callback();
    }, 2000)
}

function msg3(callback) {
    setTimeout(()=>{
        console.log("fun-3");//3
        callback();
    }, 1000)
}

function msg4() {
    setTimeout(()=>{
        console.log("Program ends");//4
    }, 1000)
}
msg(function() {
    msg2(function() {
        msg3(
            function() {
                msg4();
            }
        );
    })
})




/**
 * when msg() called then setTimeOut() executed which pushes callback into the event queue
 * so he synchronous code first will get executed and once after the  all asynchronous code will
 * get executed sequentially one after another
 * So expected output,
 * ===================
 * Program ends
    fun-1
    fun-2
    fun-3
 */
