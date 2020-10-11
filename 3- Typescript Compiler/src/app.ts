// snippet related to the lib option in tsconfig.json

const button = document.querySelector("#btn");
button?.addEventListener("click", () => {
  console.log("Button Clicked!");
});


// But how does it know that we have a document or button object!
// well it's because it was specified in the lib compiler options by default and we can add more in the tsconfig.json file

// with empty array of option "lib":[] errors will be raised 

/**  List of errors 
error TS2318: Cannot find global type 'Array'.                                                  
error TS2318: Cannot find global type 'Boolean'.
error TS2318: Cannot find global type 'CallableFunction'.
error TS2318: Cannot find global type 'Function'.        
error TS2318: Cannot find global type 'IArguments'.
error TS2318: Cannot find global type 'NewableFunction'.
error TS2318: Cannot find global type 'Number'.
error TS2318: Cannot find global type 'Object'.
error TS2318: Cannot find global type 'RegExp'.
error TS2318: Cannot find global type 'String'.
*/ 