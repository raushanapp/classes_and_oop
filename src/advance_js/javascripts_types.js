//  different types in javascripts
// 1==> 5 number
//  2 ==>true boolean
//  3 ==> string "to be or to be not"
//  4 ==> undefined
//  5 ==> null
//  6 ==> Symbol("just me")
//  7 ==>{};
//  primitive 
typeof 5;
typeof true;
typeof "to be or to be not";
typeof undefined;
typeof null; // being object 
typeof Symbol("");
//  non-primitive

const obje1 = {
    a: "Tom"
};
//  
typeof {};
typeof [];
typeof function(){}
//  all types is primitive data types or types of operator
//  array or function in javascript object

//  
Boolean(true).toString();//===> output is like this "true" because everything in javascripts is object 
//  By REFERENCE VS BY VALUE;
// a ==> b ==>  both are the object reference and but pass by value a==> primitive value and b==> is also primitive value
//  primitive value is immutable  we can modifiy 
var a = 5;
var b = a;
b++;

let obj1 = { name: "Vineet", password: "123qwe" };
let obj2 = obj1;
obj2.password = "esaypassy";
//  object is pointing to reference to the momery heap 

// let obj = { a: "a", b: "b", c: "c" };
let obj = { a: "a", b: "b", c: { deep: "try to copay me" } }; // this called shallow clone 
let clone = Object.assign({}, obj);
let clone2 = { ...obj }; // only clone first layer if want to 
// obj.c = 5;
let superClone = JSON.parse(JSON.stringify(obj));
obj.c.deep = "hahaha";
// console.log(obj);
// console.log(clone);
// console.log(clone2);
// console.log(superClone);

//  type coercion in javascripts;
1 == "1";

if (1) {
    console.log(5) // out put is 5 
}
if (0) { // same as  false
    console.log(5) // output is undefine because zero false 
}

//  typeScripts 
