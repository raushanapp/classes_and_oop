// loops
const basket = ["apple", "grapes", "oranges"];
for (let i = 0; i < basket.length; i++){
    console.log(basket[i]);
}
// 2.
basket.forEach((item) => { console.log(item) });
// for of
//  Iterating simply means go one by one go into 
//  Itreating --> arrays, strings
for (item of basket) {
    console.log(item)
}

// for in  loops work in Objects of properties
//  enumerating --> objects
const detailBaskets = {
    apple: 5,
    grapes: 10,
    oranges:15,
}

for (items in detailBaskets) {
    console.log(items)
}