//프로토 타입 체인 .prototype
//모든객체 연결 = 프로토 타입 체인


function Person(name,age){
    this.name=name;
    this.age=age;
    // this.hello=function(){
    //     console.log('hello',this.name, this.age);
    // };
}

Person.prototype.hello=function(){
    console.log('hello',this.name,this.age);
}

const p = new Person('Mark', 37);



p.hello(); //hello Mark 37
console.log(p.toString());//[object Object]
console.log(Person.prototype);//Person { hello: [Function] }
console.log(Person.prototype.toString);//[Function: toString]
console.log(Person.prototype.constructor);//[Function: Person]
console.log(Person.prototype.hello);//undefined  [Function]

//프로토타입 
//빈 객체 함수는 구현되어있고, 프로토 타입 체인에 의해 상위에 있는 헬로우가 가진 함수를 의미
console.log(Object.prototype);//{}
console.log(Object.prototype.toString);//[Function: toString]
console.log(Object.prototype.constructor);//[Function: Object]

console.log(p instanceof Person);//p가 어떤 인스턴스로부터 나온것인가 true
console.log(p instanceof Object);//true
//프로토타입 상속 