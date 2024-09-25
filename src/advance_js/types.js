//  types of javascripts
//  Primitve types 6
typeof 5; // number like
typeof true; // boolean
typeof "to be or not to be"; // string
typeof undefined;
typeof null;
typeof Symbol("just me");
// Non Primitive types
typeof {};
typeof [];
typeof function () {};
//  array in javascripts is object
Array.isArray(""); // false
Array.isArray([1, 2, 3]); // true

//  BY reference vs BY Value
// => value
var a = 5;
var b = a; // reference value of a and copay and paste the value of a
b++;
console.log(a);
console.log(b);
//  Object memory point to reference and not value

let obj1 = { name: "Yao", password: "123" };
let obj2 = obj1;
obj1.password = "easypeasy";

// console.log(obj1);
// console.log(obj2);

let c = [1, 2, 3, 4, 5];
let d = [].concat(c);
// console.log(d);
d.push(17585);
d.concat(c);

//  object
let obj = { a: "a", b: "b", c: { deep: "try and copy me" } };
let clone = Object.assign({}, obj);
let clone2 = { ...obj };
let superClone = JSON.parse(JSON.stringify(obj));
obj.c.deep = "hahahah";
// console.log(clone);
// console.log(clone2);
// console.log(obj);
// console.log(superClone);

//  type coercion
1 == "1";
