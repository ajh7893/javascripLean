// async function 에서 return 되는 값은 
//promise.resolve함수로 감싸서 리턴된다.

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
            //reject(new Error('reason'));
        }, ms);
    });
}

async function asyncP(){
    const ms = await p(1000);
    return 'John';

    
}

(async function main(){
    try{
        const name = await asyncP();
        console.log(name);
    }catch(error){
        console.log(error);
    }
})();
//실행순서
// async  p => p -> resolve -> return