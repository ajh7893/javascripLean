global.a=0;
{
    const a =1 ;
    //전역
    const test = new Function('return a');

    console.log(test());
}


{
    const a =2;

    const test = function(){
        return a;
    };

    console.log(test());
}