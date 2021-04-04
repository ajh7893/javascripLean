//new Object()  = 기초 객체 내장객체 권장xxxx

//new Object

const a= new Object();

console.log(a, typeof a);//{}

const b = new Object(true);
console.log(b, typeof b);//[boolean : true]


const c = new Object({name : 'Mark'});  //리터럴로 넣어주면

console.log(c, typeof c);//{name : 'Mark'} // 문자 그대로 작성한 객체 = 리터럴