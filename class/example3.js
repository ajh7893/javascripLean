//멤버 변수

class A{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
}

console.log(new A('name',35));//A { name: 'name', age: 35 }


class B {
    name;
    age;
}
console.log(new B());//B { name: undefined, age: undefined }
console.log(new B('John',31));

 class C{
     name = 'no name';
     age = 0;

      constructor(name, age){
          this.name = name;
          this.age = age;
      }
 }
 console.log(new C());
 console.log(new C('John', 33));//C { name: 'John', age: 33 }
