/*
    보통 reject함수를 실행하며 rejected되는 이유를 넘기는데, 표준 내장 객체인 Error 의 생성자를 이용하여 Error객체를만들어  전달한다.

*/

function p(){
    return new Promise((resolve, reject)=> {
        //pending
        setTimeout(()=> {
            reject(new Error('bad'));
            
        },1000);
        
    });
} 

p().then((message)=> {
   //fulfilled  
   //1초후에 시작
   console.log("1초 1000ms 뒤에 실행",message);

}).catch(reason=> {
    console.log("1초 1000ms 뒤에 rejected",reason);//

    /*
        at Timeout._onTimeout (C:\Users\ubstory_dev1\Documents\lean\javascript\promise\example10.js:5:20)
    at listOnTimeout (internal/timers.js:549:17)
    at processTimers (internal/timers.js:492:7)
    */
}); 
