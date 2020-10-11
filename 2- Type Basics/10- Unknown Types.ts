// we don't know yet what the user will input
// it can hold any value because it's unknown
// unknown is more restrictive than any
// better choice than any, becuase it keeps type checking 
// use along with if conditions 
let input: string;
let userInput: unknown;
userInput = 5;
userInput = "Max";

// input = userInput; // raise an error;
// to overcome this issue
if (typeof userInput === "string") {
  input = userInput;
}

// Difference between unknwon and any
let userInp: any;
userInp = 6;
userInp = "wtf dude again :3 ";

// because any disables any type checking
input = userInp; // works just fine !
