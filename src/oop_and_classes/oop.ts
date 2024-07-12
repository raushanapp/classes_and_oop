const user = {
  userName: "Raushan",
  isLogin: true,
  age: 28,
  getDetails() {
    console.log(this.userName);
  },
};
console.log(user.userName);
// console.log(user.getDetails(), "outside classes");
// console.log(globalThis);
interface IUser {
  userNames: string;
  age: number;
  isLogin: boolean;
}
function User(
  this: IUser,
  userNames: string,
  age: number,
  isLogin: boolean
): void {
  this.userNames = userNames;
  this.age = age;
  this.isLogin = isLogin;
}

const userOne = new (User as any)("Raushan", 28, true) as IUser;
const userTwo = new (User as any)("Tinku", 35, true) as IUser;
console.log(userTwo);
