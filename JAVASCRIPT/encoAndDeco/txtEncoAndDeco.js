let uint8Array = new Uint8Array([72,101,108,108,111]);
console.log( new TextDecoder().decode(uint8Array)); // Hello

let encoder = new TextEncoder()
let uint8ArrayChg = encoder.encode("Hello");
console.log(uint8ArrayChg)