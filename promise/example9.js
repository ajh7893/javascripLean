/*
    마찬가지로, excutor의 reject함수를 실행할때 인자를 넣어 실행하면, catch의 callback함수의 인자로 받을수 있다.
        reject('error');
        then ((reason)=>{...})
*/

function p(){
    return new Promise((resolve, reject)=> {
        //pending
        setTimeout(()=> {
            reject('error');
            
        },1000);
        
    });
} 

p().then((message)=> {
   //fulfilled  
   //1초후에 시작
   console.log("1초 1000ms 뒤에 실행",message);

}).catch(reason=> {
    console.log("1초 1000ms 뒤에 rejected",reason);
}); 
