/*
    value 가 프로미스 객체인지 아닌지 알수 없는경우, 사용하면 연결된 then 메서드를 실행한다.
    value 가 프로미스 객체면 ,  resolve 된 then 메서드를 실행한다.
    value 가 객체가 아니면, value를 인자로 보내면서, then 메서드를 실핸한다.
*/

Promise.resolve(/*value*/);
//프로미스와 값이 들어갈수 있다.

Promise.resolve(new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('foo');
    }, 1000);
})).then((data)=>{
    console.log('프로미스 객체인 경우, resolve 된 결과를 받아 then이 실행이 된다',
    data,
    );
});

Promise.resolve('var').then(data =>{
    console.log('then메서드가 없는경우, fulfilled된',data);
})