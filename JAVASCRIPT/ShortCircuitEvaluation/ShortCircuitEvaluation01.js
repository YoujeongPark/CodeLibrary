console.log(true || "rosy"); //true
console.log(false || "rosy"); //rosy
console.log(true && "rosy"); //rosy
console.log(false && "rosy"); //false

console.log("-----------------")
console.log(null || undefined); //undefined
console.log(undefined || null); //null
console.log(null && undefined); //null


console.log(undefined || "rosy"); //rosy
console.log(null || "rosy"); //rosy

let ex; console.log(ex); //undefined


const obj = null;
const myName = obj.name;
console.log(myName) //Uncaught TypeError: Cannot read property 'name' of null

const obj = null;
const myName = obj && obj.name;
console.log(myName) //null