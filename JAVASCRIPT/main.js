'use strict';

let objectExample = {};
objectExample.BHC = "뿌링클";
objectExample["kyochon"] = "허니콤보";
console.log(objectExample);




let sum = [' ']
let a1 = ['a','b','c']
let a2 = ['a','b','c']

for (let index in a1){
    console.log(index); //0 1 2 
}

for (let value of a1){
    console.log(value); //a b c 
}



const multipeResult = [...a1,...sum ,...a2];
console.log(multipeResult);

console.log(sum.concat(a1));
console.log(sum.concat(a2));

console.log(sum.push(a1));
console.log(sum.push(a2));

let arrayPushCheck = []
let a = ['a']
let b = ['b']
let c = ['c']
arrayPushCheck.push(a);
arrayPushCheck.push(b);
console.log(arrayPushCheck);

let arrayPushCheck2 = []
arrayPushCheck2.push(arrayPushCheck)
console.log(arrayPushCheck2);

let conCatExaple = a.concat(b);
console.log(conCatExaple)

let array1 = [['a'],['b'],['c']];
let array2 = [['a'],['b'],['c']];
let arrayConcat = array1.concat(array2);
console.log(arrayConcat);

let arrayData2 = {a : "치킨", b : "피자",c : "피자"}

if('a' in arrayData2){
    delete arrayData2.a;
    console.log(arrayData2)
}else{
    console.log("놉")
}


//let filterColumnData2 = arrayData2.filter((item)=> item.includes !== 'b')
//console.log(filterColumnData2);

let target = ["a","b","c"];
console.log(target.shift());

let filterColumnData = target.filter((item)=> item !== 'b')


let minus = ["b"]

console.log(target.filter(n => !minus.includes(n)));

let targetCol = ["a","b","c"]
for(let col in targetCol){
    console.log(col); // 0 1 2  
}

for(let index in targetCol){
    console.log(targetCol[index]); // a b c 
}

let arrayData = {a : "치킨", b : "피자"}


for(let key in arrayData){
    console.log(key," ---  " ,arrayData[key]);
}

// a -- 치킨
// b -- 피자 

for(let key in arrayData){
    console.log(Object.key," ---  " ,arrayData[Object.key]);
}


console.log("Hello World");

let data = []

data.push( 
    { a : "멜", b : "가" , c : "하이"
    },
    {
        a : "하이", b : "나" , c : "꽃"
    },
    {
        a : "꽃", b : "다" , c : "마우스"
    },
);

// data.filter((item, index, array)=>{
//     return item
// });

let data2 = []
data.push(
    {
        a : "꽃", b : "라" , c : "안녕"
    },
    { a : "안녕", b : "" , c :  "치킨"
    }
)

let data3 = data.concat(data2);
console.log("concat" + data3);
console.log(data3[0])


data.forEach(function(item, index, array){
    item["Order"] = (index + 1)
    return array
});

console.log(data);


function getData(word){
    let itm = []
    for(let i=0;i<data.length;i++){
        if(data[i]['a'] == word){
            itm.push(getData(data[i]['c']));
        }
    }
    return {header: word, items: itm};
}

console.log(getData("하이"));

// export function getData() {
//     return [
//         {
//             header: 'Electronics', img: 'resources/electronics.png', items: [
//                 { header: 'Trimmers/Shavers' },
//                 { header: 'Tablets' },
//                 {
//                     header: 'Phones', img: 'resources/phones.png', items: [
//                         { header: 'Apple' },
//                         { header: 'Motorola', newItem: true },
//                         { header: 'Nokia' },
//                         { header: 'Samsung' }
//                     ]
//                 },
//                 { header: 'Speakers', newItem: true },
//                 { header: 'Monitors' }
//             ]
//         },
//         {
//             header: 'Toys', img: 'resources/toys.png', items: [
//                 { header: 'Shopkins' },
//                 { header: 'Train Sets' },
//                 { header: 'Science Kit', newItem: true },
//                 { header: 'Play-Doh' },
//                 { header: 'Crayola' }
//             ]
//         },
//         {
//             header: 'Home', img: 'resources/home.png', items: [
//                 { header: 'Coffee Maker' },
//                 { header: 'Breadmaker', newItem: true },
//                 { header: 'Solar Panel', newItem: true },
//                 { header: 'Work Table' },
//                 { header: 'Propane Grill' }
//             ]
//         }
//     ];
// }



var arr3 = {};
arr3.push = [];





var array3 = [1, "Hello", [1,2,3], { hi: 1 }];
console.log(array3);
array3.shift();
console.log(array3);
array3.shift();
console.log(array3);







// Object 에 담을 데이터를 정의합니다. 
var memberData = new Object();
 memberData.name = "Derveljun"; 
memberData.activeFlg = true; 
memberData.age = 20; // Array에 담을 Item 객체를 만들어줍니다. 

var pointHistoryItem1 = new Object(); 
pointHistoryItem1.useDate = 20200101; 
pointHistoryItem1.usePoint = 1000; 
pointHistoryItem1.accuralPoint = 100; 
pointHistoryItem1.channel = "강남주점"; 

var pointHistoryItem2 = new Object(); 
pointHistoryItem2.useDate = 20200102; 
pointHistoryItem2.usePoint = 0;
 pointHistoryItem2.accuralPoint = 100; pointHistoryItem2.channel = "강서마트"; 

// Item 객체를 Array에 담아줍니다. 
var arrPointHistory = new Array(); 
arrPointHistory.push(pointHistoryItem1); 
arrPointHistory.push(pointHistoryItem2); 

// Array를 Object에 담아줍니다.
 memberData.pointHistory = arrPointHistory; 
console.log(memberData);

// 
var objectData = new Object();
objectData.header = "Electronics";

var header 

var arr2 = new Array(); 
objectData.items = arr2;






var dataList = new Object; 



var array3 = [];
array3[0].push(1);
//array3.push({hi:3});



dataList.header = "하이"
dataList.item.push({header : "aa"});
dataList.item.header =33;
console.log(dataList);




// var d = [];
// d.header = "하이"; 
// console.log(d);


// var dataList = new Object; 
// dataList.header = "하이"
// dataList.item = []; 
// dataList.item.header = "노프라블럼"
// console.log(dataList);



// var zero = new Object();
// zero.firstName = 'Zero';
// zero.lastName = 'Cho';
// zero.body = new Object();
// zero.body.height = 173;
// zero.body.weight = 66;
// console.log(zero) 





var obj = {};
obj['a'] = 0;
obj['b'] = 1;
obj['c'] = {};
console.log(obj) 
console.log(typeof(obj))
obj['c']['a'] = 'c';
console.log(obj) 







// while(true){
    


//     if(word == data[number].a){
//         data2.push(data[number].b)
//         word = data[number].c
//         number = 0; 
    
//     }else{
//         number += 1; 
//     }
    
// }


// console.log(data[0].a);



// let data2 = []
// for(var i= 0 ; i< 3 ; i++){
//     data2.push({
//         header : "1",
//         header : "2",
//         items : [{header : "1"} , {header : "2"}]
//     });

// }

// var data33 = [{ id: 1, name: 'sensor' }, { id: 2, name: 'sensor', parent: 1 },
//  { id: 3, name: 'sensor', parent: 1 }, { id: 4, name: 'sensor', parent: 3 }, { id: 5, name: 'sensor' },
//   { id: 6, name: 'sensor', parent: 5 }],

//     tree = function (data33, root) {
//         var t = {};
//         data33.forEach(o => {
//             Object.assign(t[o.id] = t[o.id] || {}, o);
//             t[o.parent] = t[o.parent] || {};
//             t[o.parent].children = t[o.parent].children || [];
//             t[o.parent].children.push(t[o.id]);
//         });
//         return t[root].children;
//     }(data33, undefined);
    
// console.log(tree);
