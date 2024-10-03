//  factory function
//  Object.create()
const elfFunctionStore = {
  attack() {
    return "attack with," + this.weapon;
  },
};
function createElf(name, weapon) {
  let newElf = Object.create(elfFunctionStore);
  //   return {
  //     name,
  //     weapon,
  //     // attack() {
  //     //   return "attack with," + weapon;
  //     // },
  //   };
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}
const peter = createElf("peter", "stone");
// peter.attack = felFunction.attack();
// console.log(peter.attack());
const sam = createElf("sam", "fire");
// sam.attack = felFunction.attack();
sam.attack();
//  Constructor function
function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}
// Elf.prototype.attack = function () {
//   return "attack with" + this.weapon;
// };
// Elf.prototype.build = function () {
//   return "attack with" + this.weapon;
// };
Elf.prototype.build = function () {
  const self = this;
  function building() {
    return self.name + ", A Building a House";
  }
  return building();
};
const ham = new Elf("Ham", "Short");
console.log(ham.build());
const math = {
  num1: 10,
  num2: 20,
  add() {
    return this.num1 + this.num2;
  },
  subtract() {
    return this.num2 - this.num1;
  },
  multiply() {
    return this.num1 * this.num2;
  },
};
