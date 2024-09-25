function woohooo() {
  console.log("woohoo");
}

woohooo.yell = "ahhhhhhhh";
// this below written code example is under the hood of javascripts engine
// const specialObject = {
//     yell: "ahhhhhhhh",
//     name: "woohoo",
//     ():console.log("woohooo")
// }
//  Function are first class citizens in JS
//1
var satff = function () {};
// 2
function a(fn) {
  fn();
}
a(function () {
  console.log("Hi there");
});

// 3 can return the function and pass as argument
function b() {
  return function c() {
    console.log("Bve");
  };
}
var d = b();
d();
