//  proto type inheritance
let dragon = {
  name: "Tayna",
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`;
    }
  },
};
dragon.fight();
let lizard = {
  name: "Kiki",
  fight() {
    return 1;
  },
};
const singLizard = dragon.sing.bind(lizard);
// console.log(singLizard());
lizard.__proto__ = dragon;
// console.log(lizard.sing());
for (let prop in lizard) {
  if (lizard.hasOwnProperty(prop)) console.log(prop);
}
let human = {
  mortal: true,
};
let socartes = Object.create(human);
socartes.age = 29;
console.log(human.isPrototypeOf(socartes));
//  only functions have  the prototype property
