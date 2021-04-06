/*
    fulfilled 되거나 rejected 된 후에 최종적으로 실행할 것이 있다면, .finally()를 설정하고, 함수를 인자로 넣는다.
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

}).finally(()=>{
    console.log('finally');
}); 
