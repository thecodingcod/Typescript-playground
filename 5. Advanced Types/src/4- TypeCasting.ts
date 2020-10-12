// TypeCasting helps you tell typescript that some value is of a specific type where typescript is not able to detect it on it's own, but developer is sure about what it's gonna be.

const p = document.querySelector("p");
const paragraph = document.getElementById("message-output");

// const userInputElement = document.getElementById("user-input")!;
// const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;

// Exclamation mark(!) tells the tsc that the Object will never yield null (it always exists!)
// Mostly used with selecting elements from the DOM
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;

// error value property doesn't exist on HTMLElement
// userInputElement.value = "Hi there!";

// solution: use casting to HtmlInputElement
// there are two equivalent ways to make a casting:
// 1- obj as castType
// 2- <castType>obj

userInputElement.value = "Hi there!";

// Alternative to the Exclamation mark(!)
const inputElement = document.getElementById("user-input");
if (inputElement) {
  (inputElement as HTMLInputElement).value = "What";
}
