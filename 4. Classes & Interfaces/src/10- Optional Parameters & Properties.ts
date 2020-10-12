interface IDevice {
  Name: string;
  Price: number;
}
interface IComputing {
  Screen: IDevice;
  Mouse: IDevice;
  Keyboard: IDevice;
  Kase: IDevice;
  GetPrice(): number;

  // Optional Parameteres and properties
  Barcode?: IDevice;
  ScanBarCode?(barcode: any): string;
}

class Computer implements IComputing {
  private screen: IDevice;
  private mouse: IDevice;
  private keyboard: IDevice;
  private kase: IDevice;
  private barcode?: IDevice;

  constructor(
    screen: IDevice,
    mouse: IDevice,
    keyboard: IDevice,
    kase: IDevice,
    barcode?: IDevice
  ) {
    this.screen = screen;
    this.mouse = mouse;
    this.keyboard = keyboard;
    this.kase = kase;
    if (barcode) {
      this.barcode = barcode;
    }
  }

  get Screen(): IDevice {
    return this.screen;
  }
  get Keyboard(): IDevice {
    return this.keyboard;
  }
  get Mouse(): IDevice {
    return this.mouse;
  }
  get Kase(): IDevice {
    return this.kase;
  }

  // commenting this won't lead to any problems!
  //   get Barcode(): IDevice | undefined {
  //     if (this.barcode) return this.barcode;
  //     else return undefined;
  //   }

  GetPrice(): number {
    let price: number =
      this.Mouse.Price +
      this.Keyboard.Price +
      this.Kase.Price +
      this.screen.Price;
    if (this.barcode) price += this.barcode.Price;
    return price;
  }
}

let computer = new Computer(
  { Name: "HP LCD", Price: 1500 },
  { Name: "Laser Mouse", Price: 45 },
  { Name: "Machine Gun", Price: 450 },
  { Name: "Fujitsu", Price: 4500 }
  //   { Name: "Barcode 2019", Price: 505 }
);

console.log(computer.GetPrice());
