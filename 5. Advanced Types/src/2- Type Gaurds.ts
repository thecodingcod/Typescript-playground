type combinable = number | string;

// how to know the exact type of a or b?
function combine(a: combinable, b: combinable): combinable {
  // this if statement is called a type gaurd (||)
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// Another Case which invovles types that aren't supported in the JS
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
  privilages: ["create", "read", "update", "delete"],
  startDate: new Date(),
};

type UnknownType = Employee | Admin;

function printEmpInfo(emp: UnknownType) {
  // This check won't work!
  // if(typeof emp ==='Empolyee'){}

  // So instead here is another Type Guard we could use to achieve the same thing
  if ("privilages" in emp) {
    console.log(`Privilages: ${emp.privilages}`);
  }
}

printEmpInfo(el);

// Yet another Type Gaurd

class Car {
  constructor() {}

  // fields

  // methods
  drive() {
    console.log("Driving....");
  }
  // properties
}

class Truck {
  drive() {
    console.log("Driving a Truck....");
  }

  loadCargo() {
    console.log("Loading cargo... ");
  }
}

type Vehicle = Car | Truck;

let v1 = new Car();
let v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo();
  }
}
