function  m2(callback) { //Higher order fun: accepting another function
    console.log("Higher-Order Function");
    callback();
}

//callback: passing a function into another function is known as callback function.
m2(function(){
    console.log("This is callback");
});