
//선언적 
function hello1(){
    console.log("hello1");
};

console.log(hello1, typeof hello1);


function hello2(name){
    console.log('hello2', name);
};



function hello3(name){
    return `hello3 ${name}` ;
};

console.log(hello3('hhee'));