const person = {
    firstName : "Rohit",
    lastName : "Sharma",     //whenever key is having separte words then it is mandatory to inclosed with ""/ ''
    age: 37,
    adress: ["mumbai", 247, "Maharshtra"]
};

// //We can change the value or replace the value of an object
// person.firstName = "Virat";
// person.lastName = "Kohli";
// console.log(person.firstName + " " + person.lastName); //virat kohli

//// Freeze the object so we can't perform any operation or can't change the value of an object
//Object.freeze(person);
//person.firstName = "Rohit"; //doesn't reflect the changes
//console.log(person.firstName);  // virat

person.greeting = function () {
    console.log("Hello " + this.firstName);
}

//console.log(person.greeting);//[Function (anonymous)]
//console.log(person.greeting());//Hello Rohit undefined