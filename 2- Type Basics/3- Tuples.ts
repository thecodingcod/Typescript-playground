const Person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Benali",
  age: 24,
  hobbies: ["Coding", "Athelete"],
  role: [2, "author"], // infered as an array
};

// Downsides: we still can do that because it's infered as an array not a tuple

// before explicit Declaration, it would not raise an error
// Person.role.push("admin");
// Person.role[1] = 45;


