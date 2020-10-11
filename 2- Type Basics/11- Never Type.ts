// Never Type
// the obvious question is, what does this function return ?
// it doesn't even return void !
// this function always crash the script !
// the function of no return !
function generateError(message: string, code: number): never {
  throw new Error(`${code}: ${message}`);
  // example of never return type: infinite loop
  // while(true){}

  
}

let res = generateError("An error occured!", 500);
console.log(res);
