/*
    보통 비동기 작업을 할때, callback함수를 인자로 넣어 로직이 끝나면 callback함수를 호출한다.
    이런경우 함수가 아래로 진행되지 않고, callback 함수안으로 진행된다.

*/

//프로미스가 없을땐 콜백지옥


function c(callback){
    setTimeout(() => {
        callback();
    }, 1000);
}
c(()=>{
    console.log('1000ms 후에 콜백 함수가 실행이 된다.');
});

c(()=>{  
    c(()=>{
        c(()=>{
            console.log('3000ms 후에 콜백 함수가 실행이 된다.');
        });
    });
});