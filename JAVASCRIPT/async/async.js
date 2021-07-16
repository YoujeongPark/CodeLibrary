// async & await
// clear style of using promise

// 1. sync
async function fetchUser(){
    return new Promise((resolve, reject) => {
        //do network request in 10 secs. .. 
        return 'ellie';
    });
}

const user = fetchUser();
user.then(console.log); 
console.log(user); 


// 2. awiait
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(3000);
    return 'apple';
}

async function getBanana(){
    await delay(3000);
    return 'banana';
}

//callback 지옥 
function pickFruits(){
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple}  + ${banana}`);
    });
}

// => 다음과 같이 바꿈
 async function pickFruits(){
     const apple = await getApple();
     const banana = await getBanana();
     return `${apple} + ${banana}`; 
 }

pickFruits().then(console.log); 

