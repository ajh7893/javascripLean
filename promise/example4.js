//p라는 프로미스 객체가 fulfilled되는 시점에 p.then 안에 설정한 callback 함수가 실행된다.
 const p = new Promise((resolve, reject)=> {
    //pending
    setTimeout(()=> {
        resoleve();//fulfilled

    },1000);
    
})

p.then(()=> {
   //fulfilled  
   //1초후에 시작

}) 

p.then(/* call back*/) ;