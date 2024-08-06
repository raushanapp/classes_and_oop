// call stack + memory heap

const number = 1995; // allocate memory for number
const string = "some text"; // allocate memory for a string

const human = {
  // allocate memory for an object... and it's values.
  first: "Raushan",
  last: "Kumar",
};

function subtract(num) {
  return num - 2;
}

function calcualte(x, y) {
  const someTotal = x + y;
  return subtract(someTotal);
}

calcualte(4, 6);

//  Memory Leak

//  global varibale cause of memory leak
var a = 1;
var b = 2;
var c = 3;

//  Event Listeners cause of memory leak & you should have clear EventListeners

var element = document.getElementById("button");
element.addEventListener("click", onClick);

//  setInterval cause of memory leak you should have clear the interval

setInterval(() => {
  // .referencing.objects....
});
