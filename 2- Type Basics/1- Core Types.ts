console.log("Playing arround with Core Types ....");
console.log("-".repeat(60));

function add(n1: number, n2: number, showResult: boolean) {
  if (showResult) {
    console.log(n1 + n2);
  } else {
    return n1 + n2;
  }
}

const num1: number = 125;
const num2: number = 345;
add(num1, num2, true);
