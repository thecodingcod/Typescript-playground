"use strict";
var Department = (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.prototype.Describe = function () {
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
    Department.prototype.AddEmployee = function (name) {
        this.employees.push(name);
    };
    return Department;
}());
var ITDepartment = new Department(0, "IT");
ITDepartment.AddEmployee("Benali");
ITDepartment.AddEmployee("Micho");
ITDepartment.AddEmployee("Tech Lead wtf dude!");
ITDepartment.Describe();
var AccountingDept = new Department(1, "Accounting");
AccountingDept.AddEmployee("Wael");
AccountingDept.AddEmployee("Sameh");
AccountingDept.AddEmployee("Ali");
AccountingDept.AddEmployee("Alaa");
AccountingDept.AddEmployee("Aloka");
AccountingDept.Describe();
var FuckersDept = new Department(2, "Fuckers");
FuckersDept.Describe();
