function A(){}
const a = new A();
console.log(a, typeof a);

//리턴이 없어서 언디파인
console.log(A());


//생성하면서 데이터 넣기

function B(name, age){
    console.log(name, age);
}

const b =new B();
const c =new B('ha', 31);
console.log(B());


