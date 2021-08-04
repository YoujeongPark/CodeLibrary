// Object to Array & Array to Object
let people = [
    {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"},
    {firstName:"Rosy", lastName:"Park", age:27, eyeColor:"yellow"},
    {firstName:"Jason", lastName:"Mraz", age:18, eyeColor:"black"},
]

let ageValues = Array.from(people, value => value.age);
console.log(ageValues) // [50, 27, 18]

let maxAge = Math.max(...ageValues);
let minAge = Math.min(...ageValues);
console.log(maxAge) // 50
console.log(minAge) // 18