"use strict";
var DepartmentShit = (function () {
    function DepartmentShit(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    DepartmentShit.prototype.Describe = function () {
        console.log("Department(" + this.id + "): " + this.name + " Department");
        console.log("----------------------------------------------");
        if (this.employees.length > 0) {
            console.log("Here is a list of Employees:");
            for (var i in this.employees) {
                console.log(i + ": " + this.employees[i]);
            }
        }
        else {
            console.log("> LOL WTF, Department has 0 Employees");
        }
        console.log("*******************************************");
    };
    DepartmentShit.prototype.AddEmployee = function (name) {
        this.employees.push(name);
    };
    return DepartmentShit;
}());
var itDept = new DepartmentShit(0, "IT");
itDept.AddEmployee("Benali");
itDept.AddEmployee("Micho");
itDept.AddEmployee("Tech Lead wtf dude!");
itDept.Describe();
var AccDept = new DepartmentShit(1, "Accounting");
AccDept.AddEmployee("Wael");
AccDept.AddEmployee("Sameh");
AccDept.AddEmployee("Ali");
AccDept.AddEmployee("Alaa");
AccDept.AddEmployee("Aloka");
AccDept.Describe();
var FuckerSpotDept = new DepartmentShit(2, "Fuckers");
FuckerSpotDept.Describe();
