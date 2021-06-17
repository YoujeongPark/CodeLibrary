'use strict';
let data = []
data.push(
    { ID : "d", PARENT : "b", NAME : "root3"},
    { ID : "b", PARENT : "a", NAME : "root1"},
    { ID : "f", PARENT : "c", NAME : "root5"},
    { ID : "c", PARENT : "a", NAME : "root2"},
    { ID : "e", PARENT : "b", NAME : "root4"},
    { ID : "a", PARENT : "", NAME : "parent"},
);

data.forEach((val) => {
    if(val.NAME === "parent"){
        val.NOVELL = 0;
    }
});

console.log(data)

const getTreeView= (nodes, parentId, nodeId, depthName, topLevel ) => {
    let resultArr = new Array();
    let hashMap = new Map();

    for(let tmpNode of nodes){
        tmpNode.childNodes = new Array();
        hashMap.set(tmpNode[nodeId], tmpNode);
        if(parseInt(tmpNode[depthName]) === parseInt(topLevel)){
            resultArr.push(tmpNode);
        }
    }

    for(let tmpNode of nodes){
        if(hashMap.get(tmpNode[parentId])){
            hashMap.get(tmpNode[parentId]).childNodes.push(tmpNode);
            console.log(resultArr)
        }
    }
    return resultArr
}


let resultArr = getTreeView(data,"PARENT","ID","NOVELL",0);
console.log(resultArr);


function getDepth(array) {
    return 1 + Math.max(0, ...array.map(({ subs = [] }) => getDepth(subs)));
}
console.log(getDepth(resultArr))



