// Built-in Generic Types in Typescript
// Array<T>
// Promise<T>
/*************************************************************************** */
// Array Generic Type
// Defining a string array
let fullName: string[] = ["Mohamed", "Benali"];

// Equivalent way using the Generics Angel Brackets and the Array type
let names: Array<string> = [];

// ES6 Feature
// string is the type of value passed to resolve
const getData: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hi i'm the fetched data you requested!");
  }, 1000);
});

async function fetchData() {
  let data = await getData;
  return data;
}

// promises need to be consumed always!
fetchData().then((data) => {
  console.log(data);
});
