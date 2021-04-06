//p라는 프로미스 객체는 1000ms 후에 fulfilled 된다.

const p = new Promise((resolve, reject)=> {
    //pending
    setTimeout(()=> {
        resoleve();//fulfilled

    },1000);
    
})

