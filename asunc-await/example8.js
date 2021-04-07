
function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
           // reject(new Error('reason'));
        }, ms);
    });
}


//promise
//체이닝
p(1000)
    .then(() => p(100))
    .then(() => p(1000))
    .then(() => { //초
        console.log('3000ms 후에 실행');
    });

//async await
(async function main(){
    await p(1000);
    await p(1000);
    await p(1000);
    console.log('3000,ms  후 실행')
})();    