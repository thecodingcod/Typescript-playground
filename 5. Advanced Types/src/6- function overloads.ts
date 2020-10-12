type combine = string | number;

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: combine, b: combine) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

let result = add(2, 4);
let res1 = add("34", "spanish");

console.log(res1);
console.log(result);
