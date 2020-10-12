class Department {
  // Constructor
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.employees = [];
  }

  // Fields
  // still gonna work because JS doesn't know a shit about acces modifiers!
  private readonly id: number;
  private name: string;
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
const ITDepartment = new Department(0, "IT");
ITDepartment.AddEmployee("Benali");
ITDepartment.AddEmployee("Micho");
ITDepartment.AddEmployee("Tech Lead wtf dude!");

ITDepartment.Describe();


const AccountingDept = new Department(1, "Accounting");
AccountingDept.AddEmployee("Wael");
AccountingDept.AddEmployee("Sameh");
AccountingDept.AddEmployee("Ali");
AccountingDept.AddEmployee("Alaa");
AccountingDept.AddEmployee("Aloka");
AccountingDept.Describe();

const FuckersDept = new Department(2, "Fuckers");
FuckersDept.Describe();

// well, this can happens without access modifiers
// which is considered a breach !
// prevent this using private keyword
// ITDepartment.employees.push("Fuck this department");
