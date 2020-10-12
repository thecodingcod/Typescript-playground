class Department_ {
  // Constructor
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.employees = [];
  }

  // Fields
  private id: number;
  private name: string;
  protected employees: string[];

  // Methods
  AddEmployee(name: string) {
    this.employees.push(name);
  }

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
    console.log("***************************************************");
  }
}

// IT Department Inherits from Department_
class ITDept extends Department_ {
  constructor(id: number) {
    super(id, "IT");
    this.administrators = [];
  }

  //Fields
  administrators: string[];

  // methods
  AddAdministrator(name: string) {
    this.administrators.push(`${name}: SysAdmin`);
  }

  AddEmployee(name: string) {
    this.employees.push(`${name}: Developer`);
  }
}

class Accounting extends Department_ {
  constructor(id: number) {
    super(id, "Accounting");
    this.reports = [];
    this.lastReport = this.reports.length > 0 ? this.reports[0] : "";
  }

  // fields
  private reports: string[];
  private lastReport: string;

  // properties: getters and setters
  get LastReport(): string {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No Report Found.");
  }
  set MostRecentReport(value: string) {
    if (!value) {
      throw new Error("Value is empty");
    }
    this.AddReport(value);
  }

  // methods
  AddReport(content: string) {
    this.reports.unshift(content);
    this.lastReport = this.reports[0];
  }

  AddEmployee(name: string) {
    this.employees.push(`${name}: Accountant`);
  }
}

const accountingDept = new Accounting(1);
accountingDept.AddEmployee("Sayed");
accountingDept.AddEmployee("Hamada");
accountingDept.AddEmployee("Hamad");

// throw error
try {
  console.log(accountingDept.LastReport);
} catch (error) {
  console.log(error.message);
}
accountingDept.AddReport(`Fucker can't just fuck!`);
accountingDept.AddReport(`Fucker can't do shit!`);
accountingDept.AddReport(`Suckers eat shit!`);
console.log(accountingDept.LastReport);

accountingDept.MostRecentReport='Year end report!';
console.log(accountingDept.LastReport);
