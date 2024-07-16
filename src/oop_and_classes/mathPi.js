const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const pabalo = {
  name: "pabalo Pandey",
  age: 28,
  isAviable: true,
  orderSomething: function () {
    console.log(`some thing happing `);
  },
};

console.log(Object.getOwnPropertyDescriptor(pabalo, "name"));
Object.defineProperty(pabalo, "name", {
  //   writable: false,
  enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(pabalo, "name"));

for (let [key, value] of Object.entries(pabalo)) {
  if (typeof value !== "function") {
    console.log(`${key}, ${value}`);
  }
}
