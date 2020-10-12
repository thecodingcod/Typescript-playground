// interfaces describes the structure of an object (how object looks like)
// in another words, it's a contract that guides developers through building specific aspect and parts of an application, and it's been defined by the designer/owner.
// interfaces contains only the definition
// " " cannot contain values
interface Person {
  Id: number;
  Name: string;
  Age: number;
  DateOfBirth: Date;

  greet(phrase: string): void;
}


let person:Person ={
    Id:1,
    Name:"Benali",   
    Age:24,
    DateOfBirth: new Date("12/07/1996"),
    greet:function(phrase:string){
        console.log(`${phrase} ${this.Name}`)
    }
}

console.log(person);
person.greet("Hi there, I'm");