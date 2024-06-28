function m1(obj) {
    console.log(obj);//{ name: 'Chhaya', age: 2, gender: 'female' }
    console.log(obj.name); //Chhaya
}

const Person = {
    name: "Chhaya", 
    age : 2,
    gender: "female"
}

//m1(Person);

const add = function(a,b) {
    console.log("Sum: " + a+b);//1020, without parenthisis consider string
    console.log("Sum: " + (a+b));//30
}
//add(10,20);

const multiply = (a,b) => a*b;
console.log(multiply(10,20)); //200


