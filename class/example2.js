//constructor

class A{}

console.log(new A()); //A{}

class B {
    constructor(){
        console.log("constructor");
    }
}

console.log(new B());//constructor


class C{
    constructor(name, age){
        console.log('constructor',name,age);
    }
}

console.log(new C('Mark', 32));//constructor Mark 32

console.log(new C());// constructor undefined undefined