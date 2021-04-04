//생성자 함수를 이용하여 새로운 객체를 만들어내는 방법


function Person(name, age){
    console.log(this);
    this.name = name ;
    this.age = age;
}

//생성자로 객체 생성
const p = new Person('mark',37);
console.log(p, p.name, p.age);


//에로우 펑션으로 만들수 없다. 생성자가 
const Cat = (name , age)=>{
    console.log(this);
    this.name = name;
    this.age = age;
}



const c = new Cat('냥이',1);