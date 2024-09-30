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

//  date object => to have  new method  .lastYear() which show your last years date

Date.prototype.lastYear = function () {
  console.log(this);
  return this.getFullYear() - 1;
};
new Date("1998-10-10").lastYear();

//  modify  .map() to print "🐸" at end of the each time

Array.prototype.map = function () {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i] + "🐸");
  }
  return arr;
};

console.log([1, 2, 34, 4, 5].map());
