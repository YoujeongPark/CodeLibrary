let arrayOld = [{a : 'apple'}, 'orange', 'fig']
let index = 1;
//let arrayNew = [...arrayOld.slice(0, index), ...arrayOld.slice(index + 1)];
let arrayNew = [...arrayOld.slice(0, index)];
console.log(arrayOld);
console.log(arrayNew);