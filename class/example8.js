//변수 , 함수 추가 및 오버라이딩


class Parent{
    name = 'Lee';

    hello(){
        console.log('hello',this.name);

    }
}

class Child extends Parent{
    age = 37;
    hello(){
        console.log('hello',this.name, this.age);
    }

}

const p = new Parent();
const c = new Child();

console.log(p,c);//
console.log(p,c);//Parent { name: 'Lee' } Child { name: 'Lee', age: 37 }
c.hello();//hello Lee 37
c.name='Anna';
c.hello();//hello Anna 37
