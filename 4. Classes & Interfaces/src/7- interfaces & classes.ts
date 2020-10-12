interface IInfo {
  // contains the publis members only (properties and methods)
  // readonly Id: number;
  Name: string;
  Age: number;
  ShowInfo(): void;
}

class Student implements IInfo {
  private id: number;
  private name: string;
  private yearOfBirth: number;

  constructor(id: number, name: string, yearOfBirth: number) {
    this.id = id;
    this.name = name;
    this.yearOfBirth = yearOfBirth;
  }

  // properties
  get Name(): string {
    return this.name;
  }

  get Age(): number {
    return new Date().getFullYear() - this.yearOfBirth;
  }

  ShowInfo(): void {
    console.log(`Id:${this.id}\nName:${this.Name}\nAge:${this.Age}`);
  }
}
