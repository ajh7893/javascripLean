//표준 내장 객체  
//객체가 이미 런타임 환경에 만들어진것 Object 


//1 Array

const a = new Array('red','black','white');

console.log(a);
console.log(a , typeof a);
console.log(a instanceof Array);
console.log(a instanceof  Object);

const b = ['red', 'green', 'ty'];

console.log(b);
console.log(b , typeof b);
console.log(b instanceof Array);
console.log(b instanceof Object);

console.log(b.slice(0,1));
console.log(Array.prototype.slice, Object.prototype.slice);