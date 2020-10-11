// Defining Enum
// Naming Convention: All Values UPPER_CASE
enum Roles {
  ADMIN, // 0
  AUTHOR, // 1
  READ_ONLY, // 2
}

let user = {
  name: "benali",
  email: "mohamedalihalawa@hotmail.com",
  github: "@thcodingcod",
  linkedIn: "/in/mobenali",
  role: Roles.ADMIN,
};

console.log(`Username: ${user.name}\nEmail: ${user.email}\nGithub:${user.github}\nLinkedIn:${user.linkedIn}\nRole:${Roles[user.role]}`);

