// Rarely used !
// another syntactic sugar provided by Typescript that's no support in
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

// Interfaces Alternative way
interface IAdmin {
  name: string;
  privilages: string[];
}

interface IEmployee {
  name: string;
  startDate: Date;
}

interface IElevated extends IAdmin, IEmployee {}

let emp: IElevated = {
  name: "Benali",
  privilages: ["create", "read", "update", "delete"],
  startDate: new Date(),
};

// Example of Intersecting union types

type numericString = string | number;
type numericBoolean = boolean | number;

type numericOnly = numericBoolean & numericString;

