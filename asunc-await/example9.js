
function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
           // reject(new Error('reason'));
        }, ms);
    });
}

//promise all

// (async function main(){
//     const result = await Promise.all([p(1000),p(2000),p(3000)]);
//     console.log(result);
// })();

//Promise.race 하나만 실행하고 끝
(async function main(){
    const result = await Promise.race([p(1000),p(2000),p(3000)]);
    console.log(result);
})();