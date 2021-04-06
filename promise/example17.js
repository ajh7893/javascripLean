/*
    프로미스 객체 여러개를 생성하여,
    배열로 만들어 인자로 넣고 Promise.race를 실행하면,
    배열의 모든 프로미스 객체들 중 가장 먼저 fulfilled된 것 으로, then 의 함수가 실행됩니다.
    then 의 함수의 인자로 가장먼저 fulfilled된 프로미스 객체의 resolve인자값을 돌려준다.
*/

//Promise.race([프로미스 객체들]);


function p(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(ms);
        }, ms);
    })
}

Promise.race([p(1000),p(2000),p(3000)]).then((massage)=>{
    console.log('가장 빠른 하나가 풀필드 된후에 실행이 돕니다.',massage);
});