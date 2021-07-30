
// Object Spread
let arrayOld = [{a : 'apple'}, 'orange', 'banana']
let index = 1;
let arrayNew = [...arrayOld.slice(0, index), ...arrayOld.slice(index + 1)];

console.log(arrayOld); //[{a : 'apple'}, 'orange', 'fig']
console.log(arrayNew); // [{a : 'apple'}, 'fig']

