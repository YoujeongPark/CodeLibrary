'use strict';

let emptyMap = new Map();

let mapObject = new Map([["key1", "value1"],
                     ["key2","value2"]]);

console.log(mapObject)


for(let element of mapObject){
    element.forEach((keyValue, index) => {
        console.log(index, keyValue);
    });
}

mapObject.set("one", "111");
mapObject.set("two", "222");

for(let [key, value] of mapObject){
    console.log(key, value);
}


//set
let newMap2 = new Map();
newMap2.set("one", 111);
newMap2.set("two", 222);

for(let [key, value] of newMap2){
    console.log(key, value);
}

//get
console.log(newMap2.get("one")); ///111




