//객체에 속성 추가하기
//값을 속성으로 넣기

function A(){
    this.name = 'Mark';

}
new A();//{name : 'Mark'}
const a = new A();
console.log(a);


function B(){
    this.hello=function (){
        console.log('hello');
    }
}


(new B()).hello();