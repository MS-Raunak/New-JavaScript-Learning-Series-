/**
 * this keyword used to point the current object or context.
 * this keyword always works with object either global or current or local object
 */

//current context is global object(windows)
//console.log(this); //in console it will print global object(windows) but in node environment it print empty object

const Person = {
    name: "Chhaya",
    age:2,
    welcome: function() {
        console.log(`Welcome ${this.name}`) //current obj(context) person
    } 
}

Person.welcome();


