
// 1. Filter Example - Is Even?
let nums = [1,2,3,4,5,6,7,8,9,10];
let filteredNums = nums.filter(function isEven(num){
    return num%2 === 0;
})
console.log(filteredNums)


// 2. Filter using Conditions
let people = [
    {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"},
    {firstName:"Rosy", lastName:"Park", age:27, eyeColor:"yellow"},
    {firstName:"Jason", lastName:"Mraz", age:18, eyeColor:"black"},
]

let person = people.filter(item => item.firstName === "Rosy");
console.log(person); // {firstName: "Rosy", lastName: "Park", age: 27, eyeColor: "yellow"}


// 3. Filter
let selectedPerson = [{firstName: "Rosy", lastName: "Park", age: 27, eyeColor: "yellow"}]
let exceptRosy = people.filter(item => selectedPerson.includes(item));
console.log(exceptRosy)



let baseObject = {a : 1, b : 2, c : 3, d : 4,
    a_1 : 9, b_1 : 8, c_1 : 7, e_1 : 8};

let items = ["a","b","c"];

let filteredObject = Object.keys(baseObject).reduce(function(o, key, value) {
    if (items.includes(key)){
        //o[key] = baseObject[key]
        o[key] = baseObject[key]
        console.log(o[key]);
    }
    return o;
}, {})

console.log(filteredObject)
let newObject = {}
let f = Object.keys(filteredObject).forEach(key => {
    let v = key + "_1";
    console.log(baseObject[v]);
    newObject[filteredObject[key]] = baseObject[v]
});
console.log(newObject);