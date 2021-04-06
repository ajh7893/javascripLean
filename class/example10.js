//static 상속
//부모로부터 상속받아서 인스턴스를 만들수잇다.
class Parent{
    static age = 37;
}

class Child extends Parent{}
console.log(Parent.age, Child.age);//37 37