# javascripLean
자바스크립트 배우기

## class

## function

## hoisting

## object

## promise

## async - await
async & await는 자바스크립트의 비동기 처리 패턴이며 기존의 비동기 처리방식인 콜백함수와 프로미스의 단점을 보완하고 개발자가 읽기 좋은 코드를 작성할수있다

```javascript
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
(async function main() {
    const ms = await p(1000);
    console.log(`${ms} ms 후에 실행된다.`);
})();

```
