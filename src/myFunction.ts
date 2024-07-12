// function in typescript

// function addTwo(num: number): number {
//   // passing as returning value is number that meaning of the function returning only numbers
//   return num + 2;
//   // return "hello";
// }

// function getUpper(val: string) {
//   return val.toUpperCase();
// }
// function signUpUser(name: string, email: string, isPad: boolean) {}
// function loginUser(name: string, email: string, isPad: boolean = false) {}
// const getHello = (s: string): string => {
//   return "";
// };

// const heros = ["thor", "hulk", "luck"];
// heros.map((hero): string => {
//   return `hero is ${hero}`;
//   // return 2;
// });

// addTwo(5);
// getUpper("raushan");
// signUpUser("raushan", "sraushan890@gmail.com", false);
// loginUser("publo", "publoPandey@gmail.com", true);
// export {};

class Professor {
  private name: string;
  private teacher: string;
  constructor(name: string, teacher: string) {
    this.name = name;
    this.teacher = teacher;
  }
  // Professor(name: string, teacher: string) {
  //   this.name = name;
  //   this.teacher=teacher
  // }
  grad() {
    return this.teacher;
  }
  interoduceSelf() {
    return this.name;
  }
}

let raushan = new Professor("raushan", "coding");

// let result = raushan.interoduceSelf();

console.log(raushan.interoduceSelf(), "ts");
