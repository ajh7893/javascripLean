//static 변수, 함수

class A {
    static age = 37
    static hello(){
        console.log(A.age);
    }
}

console.log(A, A.age); //[class A] { age: 37 } 37
A.hello();//37

class B {
    age = 37;
    static hello(){
        console.log(this.age);
    }
}

console.log(B, B.age);//[class B] undefined
B.hello();//undefined
// new B().hello();

class C {
    static name = '이클래스의 이름은 C가 아니다.'
}

console.log(C.name);//이클래스의 이름은 C가 아니다.