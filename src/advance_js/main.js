//  hosting
console.log("======= 1=====");
sing();
//  this is called function expression
var sing2 = function () {
  console.log(OOOOHHHHH);
};
//  this is called function decleartion
function sing() {
  console.log("LAlalalall");
}
//  duringhosting
//  going to
one = undefined;
var one = 1;
var one = 2;
console.log(one);
//  function
//  hostion a()=undefined
a();
function a() {
  console.log("hi");
}
function a() {
  console.log("Bye!");
}
//  another quest related hosting
var favouriteFood = undefined;
var foodThoughts = undefined;

var favouriteFood = "Dal Roti";
var foodThoughts = function () {
  var favouriteFood = undefined;
  console.log("Original favourites food: " + favouriteFood);
  var favouriteFood = "sushi"; // insdide function same name variable not define then javascripts engine to global excutions state
  console.log("New favourites Food :" + favouriteFood);
};
foodThoughts();
