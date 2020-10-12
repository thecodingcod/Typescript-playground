// A special pattern  for type gaurds to work easily with unions
interface Bird {
  type: "bird";
  flyingSpeed: number;
}
interface Horse {
  type: "horse";
  RunningSpeed: number;
}
type Animal = Horse | Bird;

function moveAnimal(animal: Animal) {
  let speed: number;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.RunningSpeed;
      break;
  }
  console.log("Moving at speed of:  " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 12 });
moveAnimal({ type: "horse", RunningSpeed: 23 });
