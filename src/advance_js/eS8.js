//  String Pattern
// 1. padStart();
// 2. PadEnd();
const str = "Hello";
str.padStart("5"); // that menas starting of string you have 5 space 
str.padEnd("5"); // that menas End of string you have 5 space 
//  trailing function 
const fun = (a, b, c,) => console.log(a);
fun(1, 2, 3,);
Object.values; // it's give you value and iterate through map forEach etc
Object.entries; // it's give you key and value both
Object.keys; // it's give you key and iterate through 

const object = {
    "userName0": "Ajay",
    "userName1": "Vineet",
    "userName2":"Nashim",
}

Object.keys(object).forEach((key, index) => {
    console.log(key, object[key]);
})
Object.values(object).forEach((value) => { console.log(value) });
Object.entries(object).forEach((itemArray) => { console.log(itemArray) });
Object.entries(object).map((value) => value[1] + value[0].replace("userName", ""));