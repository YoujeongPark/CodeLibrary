// How to use New Date

// 1. Current Date
new Date() //Thu Jul 29 2021 21:23:38 GMT+0900 (대한민국 표준시)
new Date().getFullYear() //2021
new Date().getMonth()+1 //7
new Date().getDate() //29
new Date().getHours() //21
new Date().getMinutes() //23

// 2. Date Notation
new Date().toLocaleString() // "2021. 7. 29. 오후 9:15:37"
new Date().toLocaleString('en-US') // 7/29/2021, 9:24:55 PM
new Date().toLocaleString('ko-KR') // 2021. 7. 29. 오후 9:24:55
new Date().toLocaleString('sv-SE') // 2021-07-29 21:24:55


// 3. html <input type="datetime-local">
let dateTimeLocalVer = new Date().toLocaleString("sv-SE").replace(' ','T')
console.log(dateTimeLocalVer) //"2021-07-29T21:26:03"


// 4. Yesterday
let yesterday = new Date(new Date().setDate(new Date().getDate()-1));
console.log(yesterday);

let yesterday2 = function(d){d.setDate(d.getDate()-1); return d}(new Date);
console.log(yesterday2);

let yesterday3 = (d => new Date(d.setDate(d.getDate())))(new Date);
console.log(yesterday3);