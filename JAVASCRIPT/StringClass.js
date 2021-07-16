let date = "2020-09-17";
let yearEx = date.substring(0,4);
console.log(yearEx); // 2020

let replaceOne = date.replace("-","/")
console.log(replaceOne) //2020/09-17

let replaceExAll = date.replaceAll("-","/")
console.log(replaceExAll) // 4

let index = date.indexOf("-");
console.log(index); // 2020/09/17


let items = ["a","b","c"];
let result = items.map(function(element){
    if(element === "a") return element
});
console.log(result);

let includeOrNot = items.includes("b");
console.log(includeOrNot) //true

let sliceEx = items.slice(0,1);
console.log(sliceEx);

let sliceEx2 = items.slice(2);
console.log(sliceEx2);