function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

let VerificationData = {
  ID: "Clapping231",
};

let PersonalInfo = {
  Name: "Mohamed Benali",
  Age: 24,
};

let SocialAccounts = {
  Github: "@thecodingcod",
  LinkedIn: "/in/mobenali",
};

let Data = merge(VerificationData, merge(PersonalInfo, SocialAccounts));
let mergedObject = merge(40, merge(PersonalInfo, SocialAccounts));
console.log(mergedObject);
