//함수를 호출하면 함수를 만들어서 리턴



function plus(base){
    return function(num){
        return base + num;
    }
}


const plus5 =    /* base*/  plus(5);
plus5(10);//num
console.log(plus5(10));

const plus7 = plus(7);
plus7(8);//num
console.log(plus7(8));