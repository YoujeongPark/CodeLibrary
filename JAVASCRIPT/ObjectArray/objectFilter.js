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