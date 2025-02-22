// Q3) let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice


let string = 'INDIA';
let array = string.split('');
array.splice(1, 0, 'O', 'N', 'E', 'S', 'I', 'A');
let result = array.join('');
console.log(result);  // 'INDONESIA'
