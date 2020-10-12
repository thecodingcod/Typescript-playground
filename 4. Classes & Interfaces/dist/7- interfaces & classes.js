"use strict";
var Student = (function () {
    function Student(id, name, yearOfBirth) {
        this.id = id;
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }
    Object.defineProperty(Student.prototype, "Name", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "Age", {
        get: function () {
            return new Date().getFullYear() - this.yearOfBirth;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.ShowInfo = function () {
        console.log("Id:" + this.id + "\nName:" + this.Name + "\nAge:" + this.Age);
    };
    return Student;
}());
