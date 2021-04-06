//상속 기본

class Parent{
    name = 'An';

    hello(){
        console.log('hello', this.name);
    }
}

class Child extends Parent{};
const p = new Parent();
const c = new Child();
console.log(p,c);//Parent { name: 'An' } Child { name: 'An' }

c.hello();//hello An
c.name='Ahn';
c.hello();//hello Ahn