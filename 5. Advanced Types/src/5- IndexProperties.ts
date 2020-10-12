// for more info: https://www.typescriptlang.org/docs/handbook/interfaces.html#indexable-types

interface ErrorContainer {
  // with this you can add any number of properties that match the form
  [key: string]: string;
}

let errorBag: ErrorContainer = {
  email: "Not a valid Email",
  username: "must start with a capital character!",
  password: "must be 6 characters at least",
};


console.log(errorBag);