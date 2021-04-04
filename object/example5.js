//프로토 타입을 이용한 객체 확장 

//prototype 상속

function Person(){

}

Person.prototype.hello = function(){
    console.log('hello');
};

function Korean(region){
    this.region= region;
    this.where = function(){
        console.log('where', this.region);
    };
}

//코리안의 프로토 타입을 펄슨의 프로토 타입으로 바꾸면  === 할당!
Korean.prototype= Person.prototype;


const k = new Korean('seoul');

//펄슨으로부터 나오고.. 코리안으로부터도 출력이 가능.
k.hello();
k.where();


console.log(k instanceof Korean);
console.log(k instanceof Person);
console.log(k instanceof Object);