/*
    executor의 resolve함수를 실행할때 인자를 넣어 실행하면, then의 callback 함수의 인자로 받을 수 있습니다.
        resolve('hello');
        then ((message)=>{
            ...
        });
*/
function p(){
    return new Promise((resolve, reject)=> {
        //pending
        setTimeout(()=> {
            resolve('hello');//fulfilled
            
        },1000);
        
    });
} 

p().then((message)=> {
   //fulfilled  
   //1초후에 시작
   console.log("1초 1000ms 뒤에 실행",message)

}).catch(()=> {
    console.log("1초 1000ms 뒤에 rejected")
}); 
