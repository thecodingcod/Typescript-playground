// singleton pattern: ensures that you always have exactly one object instantiated from a class

class Universe {
  // static fields
  private static instance: Universe;

  // private Constructor
  private constructor(width: number, galaxies: number) {
    this.width = width;
    this.galaxies = galaxies;
  }

  // fields
  width: number;
  galaxies: number;

  // methods
  static getInstance(width: number, galaxies: number) {
    if (!Universe.instance) {
      Universe.instance = new Universe(width, galaxies);
    }
    return Universe.instance;
  }
}

const universe = Universe.getInstance(124, 700);
console.log(universe);

const parallelUniverse = Universe.getInstance(435, 21321);
console.log(parallelUniverse);
