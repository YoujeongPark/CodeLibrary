let date = "2020-09-17";
let yearEx = date.substring(0,4);
console.log(yearEx); // 2020

let replaceOne = date.replace("-","/")
console.log(replaceOne) //2020/09-17

let replaceExAll = date.replaceAll("-","/")
console.log(replaceExAll) // 4

let index = date.indexOf("-");
console.log(index); // 2020/09/17

// Array.prototype.map()
let items = ["a","b","c"];
let result = items.map(function(element){
    if(element === "a") return element
});
console.log(result);


// Array.prototype.includes()
// 1. Basic
let includeOrNot = items.includes("b");
console.log(includeOrNot) //true

// 2. Question
let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

let selectedItem = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    ]

let city1 = cities.filter(item => !cities.slice(0,3).includes(item));
console.log(city1);

let city2 = cities.filter(item => !selectedItem.includes(item));
console.log(city2);
console.log(cities.slice(0,3) === selectedItem) // Why Difference ?



// Array.prototype.some()
// Example 1
function isBiggerThan10(element, index, array) {
    return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true

[2, 5, 8, 1, 4].some(x => x > 10);  // false
[12, 5, 8, 1, 4].some(x => x > 10); // true

// Example 2
const fruits = ['apple', 'banana', 'mango', 'guava'];
function checkAvailability(arr, val) {
    return arr.some(function(arrVal) {
        return val === arrVal;
    });
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true

// Array.prototype.every()
function AllBiggerThan10(element, index, array) {
    return element > 10;
}
[2, 5, 8, 1, 4].every(AllBiggerThan10); // false
[11, 34, 25, 32, 49].every(AllBiggerThan10); // true

[2, 5, 8, 1, 4].every(x=> x > 10) // false
[11, 34, 25, 32, 49].every(x=> x > 10); // true


//Array.prototype.find()
// Example 1
let found = [2, 5, 8, 1, 4].find(x=> x > 3 ) // 5


// Example 2
const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function isCherries(fruit) {
    return fruit.name === 'cherries';
}

inventory.find(isCherries) //  name: 'cherries', quantity: 5 }

// Using arrow function and destructuring
const result = inventory.find( ({ name }) => name === 'cherries' );
console.log(result) // { name: 'cherries', quantity: 5 }





// Array.prototype.slice()
let sliceEx = items.slice(0,1);
console.log(sliceEx);

let sliceEx2 = items.slice(2);
console.log(sliceEx2);