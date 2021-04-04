//객체 리터럴

const a = {};

console.log(a, typeof a);


const b = {
    name : 'mark',
};
console.log(b, typeof b);


const c ={
    name:'Mark',
    hello1(){
        console.log('hello1',this.name);
    },
    hello2:function(){
        console.log('hello2',this.name);
    },

    //에로우 펑션은 디스가 접근이 안됨
    hello3:()=>{  //hello3 {}
        console.log('hello3',this);
    },
};

c.hello1();
c.hello2();
c.hello3();