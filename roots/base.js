let data = []

data.push(
    { a : "멜", b : "가" , c : "하이"},
    { a : "하이", b : "나" , c : "꽃"},
    { a : "꽃", b : "다" , c : "마우스"},
    { a : "하이", b : "다" , c : "꽃"}
);


function getBasicData(word){
    let itm = []
    for(let i=0;i<data.length;i++){
        if(data[i]['a'] == word){
            itm.push(getBasicData(data[i]['c']));
        }
    }
    return {header: word, items: itm};
}

console.log(getBasicData("하이"));
