let values = [10,20,30];
Array.prototype.music = function(){
    return "음악";
}

Object.prototype.sports = function(){
    return "스포츠";
}

for(let key in values){
    console.log(key, values[key]);
}

for(let value of values){
    console.log(value);
}

let sports = {
    soccer : "축구",
    baseball : "야구"
};

//for-of로 Object 열거
let keyList = Object.keys(sports);
for(let key of keyList){
    console.log(key, sports[key]);
}