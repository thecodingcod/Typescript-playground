// type alias
type AddFn = (a: number, b: number) => number;
let add: AddFn = function (a: number, b: number) {
  return a + b;
};

// another way is to use interfaces
interface Combine {
  (a: number, b: number): number;
}
let combine: Combine = (x, z) => x + z;

