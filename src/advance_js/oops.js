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
//  Constructor function ===>> still we a function 
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
//Class ES6 

class Elfs{
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  };
  attack() {
    return this.name + " " + "attack with" + " " + this.weapon;
  }
}

const ajay = new Elfs("Vinnet", "Gun");
// console.log(ajay.attack());
//  this keyword is new binding this 
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person("Ajay", 28);
console.log(person1);
// implicit binding
const person = {
  name: "Vinnet",
  age: 29,
  hi() {
    console.log("Hi!" + this.name);
  }
}
//  explicit binding
const person3 = {
  name: "Asish",
  age: 36,
  hi: function () {
    console.log("Hi" + this.setTimeout);
  }.bind(window),
}
// person3.hi();
//  arrow function means where ever write the arrow  function  that where this bind that lixcal scope
const person4 = {
  name: "anand",
  age: 25,
  hi: function () {
    var inner = () => {
      console.log("HI Person 4", this.name);
    }
    return inner();
  }
}
person4.hi();
//  Inheritance 
class Character{
  constructor(name,weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "Attack With" + " " + this.weapon;
  };
};
class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  };
};

class Orge extends Character{
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }
  makeFort() {
    return "strongest fort in the world";
  }
}

const dolby = new Elf("Dolby", "Cloth", "House");
console.log(dolby);
const shrek = new Orge("Shrek", "Club", "Green");
shrek.makeFort();
shrek.attack();
