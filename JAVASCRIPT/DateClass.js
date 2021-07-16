console.log(new Date().getFullYear());
console.log(new Date().getMonth()+1);

let yesterday = new Date(new Date().setDate(new Date().getDate()-1));
console.log(yesterday);

let yesterday2 = function(d){d.setDate(d.getDate()-1); return d}(new Date);
console.log(yesterday2);

let yesterday3 = (d => new Date(d.setDate(d.getDate())))(new Date);
console.log(yesterday3);