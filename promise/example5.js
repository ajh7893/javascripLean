//  p.then으로 callback 함수를 설정했기 때문에 fulfilled 되면서 callback이 실행된다.
const p = new Promise((resolve, reject)=> {
    //pending
    setTimeout(()=> {
        resolve();//fulfilled

    },1000);
    
})

p.then(()=> {
   //fulfilled  
   //1초후에 시작
   console.log("1초 1000ms 뒤에 실행")

}) 
