// The bellow code is for explanation only, not a good practice

// const Person: {
//   // key:type; pairs
//   // Object Definition
//   name: string;
//   age: number;
// } = {
//   name: "Benali",
//   age: 15,
// };

// rather define an interface or let it be infered
const User = {
  name: "Benali",
  age: 24,
  hobbies: ["Coding", "Athelete"],
};

// Defining Arrays by appending [] to the type name e.g. string[]
let Ages: number[] = [23, 24, 25, 26];
let Subjects: string[] = ["Mathematics", "Science", "History"];

console.log(`User: ${User.name}, ${User.age}`);
