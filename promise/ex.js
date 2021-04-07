const a = 1;

 let aa = 1;
 function outer() {
  console.log(a);

  function inner() {
    var a;
    console.log(aa);
    a = 3;
  }

  inner();

  console.log(a);
}
outer();
console.log(a);