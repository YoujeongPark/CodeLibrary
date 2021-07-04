for(let value of [10, 20, 30]){
    console.log(value);
}

for(let value of "ABCDE"){
    console.log(value);
}

let values = [
    {item : "선물1", amount : {apple : 10, candy : 30}},
    {item : "선물2", amount : {apple : 30, candy : 40}},
];

for(let {item : one , amount : {apple : two, candy : five}} of values){
    console.log(one, two, five);
}
