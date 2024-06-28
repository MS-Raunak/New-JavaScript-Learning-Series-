const person = {
    firstName : "Rohit",
    "last name" : "Sharma",     //whenever key is having separte words then it is mandatory to inclosed with ""/ ''
    age: 37,
    adress: ["mumbai", 247, "Maharshtra"]
};


//console.log(person.firstName);
// console.log(person.lastName name); //error

//console.log(person["last name"]); //only accessible by [] notation because key is having more than one word

//console.log(person.adress); //[ 'mumbai', 247, 'Maharshtra' ]

person.adress.forEach(e => console.log(e));

