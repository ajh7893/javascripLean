var hello2;
console.log(hello2);//undifine

hello1();
//hello2();
hello3();//is not undifine
function hello1(){
    console.log('hello1');
}


//호이스팅
var hello2 = function(){
    console.log("hello2");
}

const hello3 = function(){

    console.log("hello3");
};

