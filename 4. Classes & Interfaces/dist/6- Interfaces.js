"use strict";
var person = {
    Id: 1,
    Name: "Benali",
    Age: 24,
    DateOfBirth: new Date("12/07/1996"),
    greet: function (phrase) {
        console.log(phrase + " " + this.Name);
    }
};
console.log(person);
person.greet("Hi there, I'm");
