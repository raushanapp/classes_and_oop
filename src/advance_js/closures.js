//  Closures
function a() {
  let grandpa = "grandpa";
  return function b() {
    let father = "father";
    return function c() {
      let son = "son";
      return `${grandpa}==${father}**${son}`;
    };
  };
};

console.log(a()()());
const boo = (string) => (name) => (name2) => console.log(`${string}> ${name} > ${name2}`);

//  Exercise
function callMeMaybe() {
  setTimeout(function () {
    console.log(callMe);
  }, 4000);
  const callMe = "Hi! I am now here!";
}
callMeMaybe();

// Memory Efficient
function heavyDuty(index) {
  const bigArray = new Array(6000).fill("🤪");
  console.log("Created!");
  return bigArray[index];
}
heavyDuty(655);
// heavyDuty(655);
// heavyDuty(655);
const getHeavyDuty = heavyDuty2();
getHeavyDuty(700);
// getHeavyDuty(750);
// getHeavyDuty(760);
console.log(getHeavyDuty(676));
function heavyDuty2() {
  const bigArray = new Array(6000).fill("🤪");
  console.log("Created! Again!");
  return function (index) {
    return bigArray[index];
  };
}
//  Encapsulation
function makeNuclearButton() {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => {
    timeWithoutDestruction = -1;
    return "🔥";
  };
  setInterval(passTime, 1000);
  //   return {
  //     launch: launch,
  //     totalPeaceTime: totalPeaceTime,
  //   };
  return {
    totalPeaceTime: totalPeaceTime,
  };
}

let oohhno = makeNuclearButton();
oohhno.totalPeaceTime();
// oohhno.launch(); // error throw this not function because of Encapsulation functionality

//  Another exercie

let view;

function initalize() {
  let called = 0;
  return function () {
    if (called > 0) {
      return;
    } else {
      view = "👀";
      called++;
      console.log("View has been sent");
    }
  };
}
const startOnce = initalize();
// startOnce();
// startOnce();
// startOnce();
// console.log(view);

//  first solution to print  I value 0 1 2 3 to use let insted of var
let array = [1, 2, 3, 4];
for (let i = 0; i < array.length; i++) {
  setTimeout(() => {
    console.log("I am at Index" + "" + i);
  }, 3000);
}

// another solutions

for (var i = 0; i < array.length; i++) {
  (function (closuerI) {
    setTimeout(() => {
      console.log("I am at Index" + "C" + closuerI);
    }, 3000);
  })(i);
}


//  closures  and prototypes
//  first leran closures ==> first class citizen and also have like function where the function called and also have lexical scope where javascripts run what variable each function have to aceess
// 
