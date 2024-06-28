const person = {
    firstName : "Rohit",
    lastName : "Sharma",   
    age: 37,
};

//Object.key(): used to get all keys of given object
console.log(Object.keys(person));//[ 'firstName', 'lastName', 'age']

// Object.values(): used to get all values of given object
console.log(Object.values(person));//[ 'Rohit', 'Sharma', 37 ]

// Object.hasOwnProperty() :  return boolean if properties(key) present
console.log(person.hasOwnProperty('age')); //true