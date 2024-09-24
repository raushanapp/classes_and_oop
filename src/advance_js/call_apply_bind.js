//  call function
function a() {
  console.log("Hey");
}
a.call();

const wizard = {
  name: "Ajay",
  health: 50,
  heal(a, b) {
    return (this.health += a + b);
  },
};
const archer = {
  name: "Robin Hood",
  health: 30,
};
console.log("1", archer);
wizard.heal.call(archer, 20, 30); // call we can pass as parameter  and apply passing as parameter we can as array data structure
wizard.heal.apply(archer, [10, 15]);
console.log("2", archer);
let healArcher = wizard.heal.bind(archer, 10, 25); // take as parameter and retrun as function not call imdiatelly call so you call later when ever you need that
healArcher();
console.log("3", archer);

//  function currying

function multiply(a, b) {
  return a * b;
}

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(6));
let multiplyByTen = multiply.bind(this, 10);
console.log(multiplyByTen(5));
