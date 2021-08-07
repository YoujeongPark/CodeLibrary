// 현재까지 사용한건 Data Property
// Access Property - 본질은 함수, 값을 get, set 하는 것이 중요

let user = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue",

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }

};

console.log(user.fullName); // John Doe

user.firstName = "Rosy"
console.log(user.fullName);  // Rosy Doe



