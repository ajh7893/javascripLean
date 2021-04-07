//error 전파

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve(ms);
            reject(new Error('reason'));
        }, ms);
    });
}

async function asyncP(){
    const ms = await p(1000);
    return 'John'+ms;

    
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
//main async p()  