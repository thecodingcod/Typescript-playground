# Types of Typescript

## Core Types (Javascript Types)

### Numbers (imporved)

`number` ==> for float types e.g. 2.34
`bigint` ==> for integers e.g. 121996
**Note(not sure)**: in JS everything is just a number !

### Strings

`string` ==> for string e.g. "Hello there, I'm Benali".

### Boolean

`boolean` ==> for boolean values (True or false)

### Object

`{prop:value, ...}` ==> for defining custom singleton objects

### Arrays (Dynamic Arrays)

`{<type>[]}` ==> to define an array of <type> e.g. string[] ==> defines array of strings.

## New Types

Types that type script brought as a new types.

### Tuples

Tuples are like arrays but with Fixed Length and Fixed Type.
Example: `let tup:[number,string] = [1,'somebody ate my spaghetti'];`

### Enums

An enum is a special "class" that represents a group of constants (unchangeable/read-only variables).

```typescript
enum Roles {
  ADMIN,
  AUTHOR,
  MEMBER,
  VISITOR,
}
```

### Any
`any` involves any type which is kind of a downside becuase it omits all the typescript type-checking features and starts to behave just like a JS.

in another word, any thing can be assigned to any thing.

```typescript
// Assign any type of value ! (Normal behaviour of JS)
let DownSide: any = "Disadvantage";
console.log(DownSide);

// here is WTF!? who? JS? 
DownSide = 15;
console.log(DownSide);
```

## Setting a type

Syntax: `let <var_name>:<type> = <value> ;`

```typescript
let commonName: string = "Benali";
```

## Additional Notes

### Type Checking in Javascript

However we could do the type-checking in javascript, it's not a good practice, we can already prevent that using Typescript which provides type checking at compiling-time( Development-Time).

Javascript does it's checking at the middle of the war (Runtime)!

```javascript
if (typeof n1 !== "number" || typeof n2 !== "number") {
  throw new Error("Incorrect Input!");
}
```

### Overriding Typescript Inference

There are cases where typescript inference doesn't match our desire, like infering a tuple as an array, How to override it?
Example

```typescript
let Perosn: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Benali",
  age: 24,
  hobbies: ["Coding", "Athelete"],
  role: [2, "author"],
};
```
