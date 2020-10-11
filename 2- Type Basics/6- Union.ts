// Union Type: type1 | type2 called type1 or type2
function Combine(arg1: number | string, arg2: number | string) {
  let resultNum: number;
  if (typeof arg1 === "number" && typeof arg2 === "number") {
    return arg1 + arg2;
  } else if (typeof arg1 === "string" && typeof arg2 === "string") {
    return arg1 + " " + arg2;
  }
  return null;
}

let Sum = Combine(1, 4);
let FullName = Combine("Mohamed", "Benali");

console.log(Sum);
console.log(FullName);
