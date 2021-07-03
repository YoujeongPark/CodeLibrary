// Object.keys, values, entries

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}

console.log(Object.keys(person)); //["firstName", "lastName", "age", "eyeColor"]
console.log(Object.values(person)); // ["John", "Doe", 50, "blue"]
console.log(Object.entries(person)); //[["firstName", "John"],["lastName", "Doe"],["age", 50],["eyeColor", "blue"]]

//Reform an object
const objEntries = Object.entries(person);
console.log(objEntries); // [["firstName", "John"],["lastName", "Doe"],["age", 50],["eyeColor", "blue"]]
console.log(Object.fromEntries(objEntries)); // {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"}