let example = "2020-09-17";
let yearEx = example.substring(0,4);
console.log(yearEx);

let replaceOne = example.replace("-","/")
console.log(replaceOne) //2020/09-17

let replaceExAll = example.replaceAll("-","/")
console.log(replaceExAll)

let items = ["a","b","c"];
let result = items.map(function(element){
    if(element === "a") return element
});
console.log(result);

let includeOrNot = items.includes("b");
console.log(includeOrNot)