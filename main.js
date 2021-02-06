'use strict';

console.log("Hello World");

let data = []

data.push( 
    { a : "연필", b : "가" , c : "하이"
    },
    {
        a : "하이", b : "나" , c : "꽃"
    },
    {
        a : "꽃", b : "다" , c : "마우스"
    },
    {
        a : "꽃", b : "라" , c : "안녕"
    }

);

var arr3 = {};
arr3.push = [];





var array2 = [1, "Hello", [1,2,3], { hi: 1 }];
console.log(array2);
array2.shift();
console.log(array2);
array2.shift();
console.log(array2);







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
