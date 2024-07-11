const Person = {
    id: 1,
    name: "Chhaya",
    age: 3,
    status: "kid"
}

//Access data using dot(.) notation
console.log(Person.name);

//Access data using [] notation
console.log(Person["age"]); //while accessing data using [] notation key must be enclosed with double quotes

//Access data using destructuring key
const{id, name, ...remaingData} = Person; //we can destruct multiple data in single key using spread operator
console.log(id, name);
console.log(remaingData);

