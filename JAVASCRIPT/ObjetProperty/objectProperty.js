'use strict';

//Property Flags
//7. 객체 프로퍼티 설정

let user = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'firstName');
console.log( JSON.stringify(descriptor, null, 2 ) );

user.name = "Rosy"


for (let key in user) console.log(key);
// firstName
// lastName
// age
// eyeColor
// name


let user2 = {
    firstName:"John",
    lastName:"Doe",
    toString() {
        return this.firstName;
    }
};


Object.defineProperty(user2, "toString", {
    enumerable: false
});

for (let key in user2) console.log(key);