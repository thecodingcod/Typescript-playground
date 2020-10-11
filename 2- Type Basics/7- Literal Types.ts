// infered type is a literal type equals 3.14
const Pi = 3.14;

// It might be another way to define constants
// here an example which raise an error
// let constant: 5 = 6;

// assume that age is only accepts 24
let age: 24 = 24;

// it cannot accept other values if you try to reassign
// age = 25; // error: type 25 is not assignable to 24

let TemparatuteConverter = {
  Conversions: {
    CToF: (c) => (c * 9) / 5 + 32,
    FToC: (f) => ((f - 32) * 5) / 9,
    KToF: (k) => ((k - 273.15) * 9) / 5 + 32,
    FToK: (f) => ((f - 32) * 5) / 9 + 273.15,
    CToK: (c) => c + 273.15,
    KToC: (k) => k - 273.15,
  },
  Convert: function (
    value: number,
    from: "from-c" | "from-k" | "from-f",
    to: "to-c" | "to-k" | "to-f"
  ) {
    if (from === "from-c" && to === "to-f") {
      return this.Conversions.CToF(value);
    } else if (from === "from-f" && to === "to-c") {
      return this.Conversions.FToC(value);
    } else if (from === "from-k" && to === "to-f") {
      return this.Conversions.KToF(value);
    } else if (from === "from-f" && to === "to-k") {
      return this.Conversions.FToK(value);
    } else if (from === "from-k" && to === "to-c") {
      return this.Conversions.KToC(value);
    } else if (from === "from-c" && to === "to-k") {
      return this.Conversions.CToK(value);
    }
    return undefined;
  },
};

let result = TemparatuteConverter.Convert(25, "from-c", "to-k");
console.log(result);


// here we used the Literal Types along with union to define a fixed set of allowed parameters 