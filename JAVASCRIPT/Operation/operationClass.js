let item = {["one + two"] : 13}
console.log(item.onetwo);

let item2 = "tennis";
let sports = {
    [item2] : 1,
    [item2 + "Game"] : "윔블던",
    [item2 + "Method"](){
        return this[item];
    }
}
console.log(sports.tennis);
console.log(sports.tennisGame);
console.log(sports.tennisMethod())

let defaultpara;
console.log(defaultpara);

let [one,two,five = 5] = [1,2];
console.log(five);

[one, two, five = 5] = [1,2,78];
console.log(five);

let {six,seven = 7} = {six : 6};
console.log(six, seven);


let plus = (one, two = 2) => one, two;
console.log(plus(1));
console.log(plus(1,undefined));
console.log(plus(1,7));

let getTotal = ([one, two] = [10,20]) => one +two;
console.log(getTotal());

let getValue = ({two : value } = {two : 20}) => value;
console.log(getValue());

