'use strict';
let data = []
data.push({ ID : "a", PARENT : "", NAME : "parent"},
    { ID : "b", PARENT : "a", NAME : "root1"},
    { ID : "c", PARENT : "a", NAME : "root2"},
    { ID : "d", PARENT : "b", NAME : "root3"},
    { ID : "e", PARENT : "b", NAME : "root4"},
    { ID : "f", PARENT : "c", NAME : "root5"},

);



function getData(word){
    let item = []
    for(let i=0;i<data.length;i++){
        if(data[i]['PARENT'] === word){
            item.push(getData(data[i]['ID']));
        }
    }
    return {header: word, items: item};
}

let treeData = getData("");
console.log(treeData);


