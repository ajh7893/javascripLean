//get , set

class A{
    _name = 'no name';//내부에서 사용할땐 언더바를 붙이고  외부에서는 겟터 셋터를 사용한다.

    get name(){
        return this._name+'@@@';
    }

    set name(value){
        this._name=value+'!!!';
    }
}

const a = new A();
console.log(a);//A { _name: 'no name' }
a.name='Mark';//set
console.log(a);//A { _name: 'Mark!!!' }
console.log(a.name);/// get --- Mark!!!@@@
console.log(a._name);//Mark!!!


///readonly

class B{
    _name = 'no name';

    get name (){
        return this._name + '@@@';
    }
}

const b = new B();
console.log(b);
b.name ='Mark';
console.log(b);