/*
    마찬가지로 프로미스 객체가 rejected 되는 시점에 p.catch안에 설정한 callback 함수가 실행된다.
*/
//비동기 
function p(){
    return new Promise((resolve, reject)=> {
        //pending
        setTimeout(()=> {
            //resolve();//fulfilled
            reject();//rejected
        },1000);
        
    });
} 

p().then(()=> {
   //fulfilled  
   //1초후에 시작
   console.log("1초 1000ms 뒤에 실행")

}).catch(()=> {
    console.log("1초 1000ms 뒤에 rejected")
}); 
