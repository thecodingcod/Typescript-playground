# 5- Advanced Types

## 1- Intersection Types

Intersection types allows us to combine other types.

- Rarely Used.
- Has no support in Js, just a syntactic suger provided by Typescript.

### If I ever found a real usecase i'll list here

- [fun-fact]: i didn't find any yet! (12/10/2020)

Example1:

```typescript
type Admin = {
  name: string;
  privilages: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
  name: "Benali",
  privilages: ["create", "edit"],
  startDate: new Date(),
};
```

Example2:

```typescript
// Example of Intersecting union types
type numericString = string | number;
type numericBoolean = boolean | number;
type numericOnly = numericBoolean & numericString;
```

## 2- Type Gaurds

Helps with union types, also has benefits in multiple situtions.

### 3 types of Type Gaurds

- `typeof` operator

```typescript
if (typeof a === "string" || typeof b === "string")
```

- `in` operator to check if a property exists in obj

```typescript
 if ("privilages" in emp)
```

- `instanceof` operator to check whether an obj is an instance of certain type

```typescript
 if (vehicle instanceof Truck)
```

## 4- Type Casting

there is two equivalent ways to make a type cast

1. `<CastType>obj`
2. `obj as CastType` --> prefered in frameworks like React

Note: Exclamation mark(!) tells the tsc that the Object will never yield null (it always exists!)

Example

```typescript
const userInputElement = document.getElementById("user-input")!;
```

## 5- Index Properties
