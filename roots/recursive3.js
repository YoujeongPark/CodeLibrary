// factorial
function factorial(n){
    if(n === 1){
        return 1;
    }
    return n * factorial(n-1);;
}
console.log(factorial(5));


function plus(n){
    if(n===1){
        return 1
    }
    return n + plus(n-1);
}
console.log(plus(5))


