/* 
        then을 설정하는 시점을 정확히 하고, 
        함수의 실행과 동시에 프로미스 객체를 만들면서 pending이 시장되도록 하기위해
        프로미스 객체를 생성하면서 리턴하는 함수 p를 만들어 함수 p실행과 동시에 then을 설정한다.
*/
function p(){
    return new Promise((resolve, reject)=> {
        //pending
        setTimeout(()=> {
            resolve();//fulfilled
    
        },1000);
        
    });
} 

p().then(()=> {
   //fulfilled  
   //1초후에 시작
   console.log("1초 1000ms 뒤에 실행")

}); 
