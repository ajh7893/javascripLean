//함수를 호출할때 인자로 함수를 호출

function hello(callback){
    console.log('hello');
    callback();
}


//hello함수가 실행이 되면 hello가 실행이 되고  헬로 안에 함수가 callback에 들어가므로..
hello(function (){
    console.log('콜백')
});