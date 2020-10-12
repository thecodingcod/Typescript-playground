// abstract classes is like interfaces but with implemented members, means it can contain both (implemeneted members & defined members)
abstract class Department__ {
  // Constructor
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.employees = [];
  }

  // Fields
  protected id: number;
  protected name: string;
  protected employees: string[];

  // Methods
  AddEmployee(name: string) {
    this.employees.push(name);
  }

  // force anyone that inherits this class to implement this method
  abstract Describe(): void;
}

// IT Department Inherits from Department_
class ITDept_ extends Department__ {
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

  Describe(): void {
    console.log("This is the shitty department of (IT....)");
    console.log(`${this.id}: ${this.name}`);
  }
}

class Accounting_ extends Department__ {
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

  Describe(): void {
    console.log("This is the cool department of (Accounting....)");
    console.log(`${this.id}: ${this.name}`);
  }
}

const _accountingDept = new Accounting(1);
_accountingDept.AddEmployee("Sayed");
_accountingDept.AddEmployee("Hamada");
_accountingDept.AddEmployee("Hamad");

// throw error
try {
  console.log(_accountingDept.LastReport);
} catch (error) {
  console.log(error.message);
}
_accountingDept.AddReport(`Fucker can't just fuck!`);
_accountingDept.AddReport(`Fucker can't do shit!`);
_accountingDept.AddReport(`Suckers eat shit!`);
console.log(_accountingDept.LastReport);

_accountingDept.MostRecentReport = "Year end report!";
console.log(_accountingDept.LastReport);
