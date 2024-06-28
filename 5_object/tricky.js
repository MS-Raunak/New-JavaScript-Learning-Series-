//take symbol datatype variale as key and access value

const symbolKeyAge = Symbol();

const user = {
    name: "Raman", 
    symbolKeyAge: 30 
}

console.log(user.symbolKeyAge); //30
console.log(user[symbolKeyAge]); //undefined