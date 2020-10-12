function merge(objA: object, objB: object): object {
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

let AllInfo = merge(VerificationData, merge(PersonalInfo, SocialAccounts));
console.log(AllInfo);

// here is where problems arise
// console.log(AllInfo.Name);

// Solution1: is either use: boxing and unboxing using casting
interface Info {
  ID: string;
  Name: string;
  Age: number;
  Github: string;
  LinkedIn: string;
}

let unboxed = AllInfo as Info;
console.log(unboxed.Name);

// Solution 2: Using generics at the first place!
function GenericMerge<T, K>(objA: T, objB: K) {
  return Object.assign(objA, objB);
}

let AllInfoGeneric = GenericMerge(
  VerificationData,
  GenericMerge(PersonalInfo, SocialAccounts)
);

// well it only knows about ID!
console.log(AllInfoGeneric.LinkedIn);
