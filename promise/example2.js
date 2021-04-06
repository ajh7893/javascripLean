/**
 * 
 * 생성자를 통해서 프로미스 객체를 만들수 있다
 * 생성자의 인자로 executer라는 함수를 이용한다
 * 
 */

new Promise(/* executor */);

/*
    executor 함수는 resolve 와 reject 를 파라미터로 갖는다.
    (resolve, reject) => {...0}
    resolve와 reject 는 함수
    resolve(), reject()
*/
new Promise(/* executor  */(resolve, reject)=>{});

//생성자를 통해 프로미스 객체를 만드는순간 pending(대기)상태라고 한다.
new Promise((resolve, reject)=>{}); //pending

//executor 함수 파라미터중 하나인 resolve 함수를 실행하면, fulfilled(이행) 상태가 된다.
new Promise((resolve, reject)=> {
//
//
        //...
        resolve();//fulfilled 
}
);

//reject 함수를 실행하면 rejected(거부)상태가 된다.

new Promise((resolve, reject)=> {
    reject();//rejected
});