class DepartmentShit {
  // Constructor
  constructor(private id: number, public name: string) {
    //   this.id = id;
    //   this.name = name;
    this.employees = [];
  }

  // Fields
  // still gonna work because JS doesn't know a shit about acces modifiers!
  // private id: number;
  // private name: string;
  private employees: string[];

  // Properties

  // Methods
  Describe(): void {
    console.log(`Department(${this.id}): ${this.name} Department`);
    // console.log("-".repeat(50));
    console.log("----------------------------------------------");
    if (this.employees.length > 0) {
      console.log(`Here is a list of Employees:`);
      for (let i in this.employees) {
        console.log(`${i}: ${this.employees[i]}`);
      }
    } else {
      console.log("> LOL WTF, Department has 0 Employees");
    }
    // console.log("**".repeat(25));
    console.log("*******************************************");
  }

  AddEmployee(name: string) {
    this.employees.push(name);
  }
}

// Creating Objects
const itDept = new DepartmentShit(0, "IT");
itDept.AddEmployee("Benali");
itDept.AddEmployee("Micho");
itDept.AddEmployee("Tech Lead wtf dude!");

itDept.Describe();

const AccDept = new DepartmentShit(1, "Accounting");
AccDept.AddEmployee("Wael");
AccDept.AddEmployee("Sameh");
AccDept.AddEmployee("Ali");
AccDept.AddEmployee("Alaa");
AccDept.AddEmployee("Aloka");
AccDept.Describe();

const FuckerSpotDept = new DepartmentShit(2, "Fuckers");
FuckerSpotDept.Describe();

// well, this can happens without access modifiers
// which is considered a breach !
// prevent this using private keyword
// ITDepartment.employees.push("Fuck this department");
