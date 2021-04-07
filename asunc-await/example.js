/*
async function functionname(){} 

*/

//Promise객체를 리턴하는 함수

function p(ms){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
           resolve(ms); 
        }, ms);
    });
}

//로직 수행
p(1000).then(ms=>{
    console.log(`${ms} ms 후에 실행된다.`)
});

//프로미스객체를 리턴하는 함수를 await로 호출하는 방법
//비동기 처리가 끝날때까지 기다렸다가 
const ms = await p(1000);