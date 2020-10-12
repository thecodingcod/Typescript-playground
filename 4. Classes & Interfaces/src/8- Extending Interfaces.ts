// we can also exten interfaces
interface INameable {
  readonly Name: string;
}

interface IGreatable extends INameable {
  great(phrase: string): void;
}

class shit implements IGreatable {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  get Name(): string {
    return this.name;
  }

  great(phrase: string): void {
    console.log(`${phrase} + ${name}`);
  }
}
