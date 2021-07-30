// Object.keys, values, entries

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}

Object.keys(person); //["firstName", "lastName", "age", "eyeColor"]
Object.values(person); // ["John", "Doe", 50, "blue"]
Object.entries(person); //[["firstName", "John"],["lastName", "Doe"],["age", 50],["eyeColor", "blue"]]

//Reform an object
const objEntries = Object.entries(person);
objEntries; // [["firstName", "John"],["lastName", "Doe"],["age", 50],["eyeColor", "blue"]]
Object.fromEntries(objEntries); // {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"}