
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
person.lastName = "Doe";
console.log(person);

const flower = [];
flower.push({rose : "red"});
flower.push({sunFlower : "yellow"});
console.log(flower);

const flower1 = {rose : "red"};
const flower2 = {sunFlower : "yellow"};
console.log({...flower1, ...flower2});
console.log(Object.assign(flower1, flower2));

const flower3 = {...flower1, ...flower2};
if(null){console.log("값없음")}

if(flower3) {console.log("값이 있다.")}
if({}) {console.log("값이 있다.")}
if({}===null) {console.log("값이 있다.")}
console.log({} !== null)