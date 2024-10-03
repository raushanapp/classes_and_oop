//  classes ES6

class Elf {
  constructor(name, weapon) {
    this.weapon = weapon;
    this.name = name;
  }
  attact() {
    return "Attact with " + this.weapon;
  }
}
const sam = new Elf("Sam", "fire");
sam.attact();
console.log(sam instanceof Elf);

// new binding  this

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person1 = new Person("Xavier", 55);
console.log(person1);

//  implicit binding

const Person2 = {
  name: "Karen",
  age: 40,
  hi() {
    console.log("Hi", this.name);
  },
};

//  explicit binding

const Person3 = {
  name: "karen",
  age: 50,
  hi: function () {
    console.log("Hi", this.setTimeout);
  }.bind(this), // insated of window we can use this in node js enviroement
};
Person3.hi();

//  arrow function
const Person4 = {
  name: "karen",
  age: 50,
  hi: function () {
    var inner = () => {
      console.log("Hi", this.setTimeout);
    };
    return inner();
  }.bind(this),
};
Person4.hi();

//  inheritance  =>

class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "Attack with, " + this.weapon;
  }
}

class ElfS extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
    console.log(this);
  }
}

class Orge extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }
  makeFort() {
    return "Strongest Fort in the world made";
  }
}
// const fino = new ElfS("Fina", "nija stars");
// fino.attack();

const dolby = new ElfS("Dolby", "cloth", "House");
console.log(dolby.attack());
// console.log(ElfS.__proto__.__proto__);
const shrek = new Orge("Shrek", "club", "Red");
console.log(shrek.makeFort());

console.log(Orge.prototype.isPrototypeOf(shrek));
console.log(Character.prototype.isPrototypeOf(Orge.prototype));

console.log(dolby instanceof ElfS);
console.log(dolby instanceof Orge);
console.log(dolby instanceof Character);
