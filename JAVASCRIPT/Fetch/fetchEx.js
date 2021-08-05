// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
let url = 'https://www.naver.com/';
let response = await fetch(url);

let commits = await response.json();
console.log(commits)

// Access to fetch at 'https://www.naver.com/' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource
// If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.


// 왜 html 할때는 async가 필요하고 console창에서는 직접 칠때는 되는건지?
let url = 'https://api.github.com/repos/javascript-tutorial/ko.javascript.info/commits';
let response = await fetch(url);

let commits = await response.json(); // 응답 본문을 읽고 JSON 형태로 파싱함

alert(commits[0].author.login);