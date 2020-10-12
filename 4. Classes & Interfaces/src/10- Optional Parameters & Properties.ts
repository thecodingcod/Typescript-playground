interface INameables {
  readonly name: string;

  // optional
  outputNames?: string;
}

class xyz implements INameables {
    
    // constructor
    constructor(name: string) {
        this.name = name;
    }
    name: string;

 // properties
    get Name(): string {
      return this.name;
    }

    // optional field
    outputNames?: string | undefined;
}
