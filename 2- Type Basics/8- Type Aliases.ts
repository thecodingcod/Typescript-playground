// we can create custom type by making a union between types and then alias them

type strandnumber = string | number;

function print(value: strandnumber) {
  console.log(value);
}

print(5);
print("string");
// print(true);// raise an error
