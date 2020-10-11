// Delegate Like variable via Arrow Function
let Predicate: (...args) => boolean = (a, b) => (a === b ? true : false);
console.log(Predicate(4, 5));

interface pair {
  id: number;
  name: string;
}

let objArr: pair[] = [
  {
    id: 0,
    name: "wael",
  },
  {
    id: 1,
    name: "Sayed",
  },
  {
    id: 2,
    name: "Omar",
  },
  {
    id: 3,
    name: "Shit",
  },
  {
    id: 4,
    name: "WTF Dude?",
  },
];

let findEl: (fn: (p: pair) => boolean, list: pair[]) => pair = function (
  predicate,
  list: pair[]
) {
  for (let i of list) {
    if (predicate(i)) {
      return i;
    }
  }
  return null;
};

let el = findEl((p) => p.id === 4, objArr);

console.log(el.name);