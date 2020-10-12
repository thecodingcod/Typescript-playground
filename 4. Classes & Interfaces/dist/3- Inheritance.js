"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department_ = (function () {
    function Department_(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department_.prototype.AddEmployee = function (name) {
        this.employees.push(name);
    };
    Department_.prototype.Describe = function () {
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
        console.log("***************************************************");
    };
    return Department_;
}());
var ITDept = (function (_super) {
    __extends(ITDept, _super);
    function ITDept(id) {
        var _this = _super.call(this, id, "IT") || this;
        _this.administrators = [];
        return _this;
    }
    ITDept.prototype.AddAdministrator = function (name) {
        this.administrators.push(name + ": SysAdmin");
    };
    ITDept.prototype.AddEmployee = function (name) {
        this.employees.push(name + ": Developer");
    };
    return ITDept;
}(Department_));
var Accounting = (function (_super) {
    __extends(Accounting, _super);
    function Accounting(id) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = [];
        _this.lastReport = _this.reports.length > 0 ? _this.reports[0] : "";
        return _this;
    }
    Object.defineProperty(Accounting.prototype, "LastReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("No Report Found.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Accounting.prototype, "MostRecentReport", {
        set: function (value) {
            if (!value) {
                throw new Error("Value is empty");
            }
            this.AddReport(value);
        },
        enumerable: false,
        configurable: true
    });
    Accounting.prototype.AddReport = function (content) {
        this.reports.unshift(content);
        this.lastReport = this.reports[0];
    };
    Accounting.prototype.AddEmployee = function (name) {
        this.employees.push(name + ": Accountant");
    };
    return Accounting;
}(Department_));
var accountingDept = new Accounting(1);
accountingDept.AddEmployee("Sayed");
accountingDept.AddEmployee("Hamada");
accountingDept.AddEmployee("Hamad");
try {
    console.log(accountingDept.LastReport);
}
catch (error) {
    console.log(error.message);
}
accountingDept.AddReport("Fucker can't just fuck!");
accountingDept.AddReport("Fucker can't do shit!");
accountingDept.AddReport("Suckers eat shit!");
console.log(accountingDept.LastReport);
accountingDept.MostRecentReport = 'Year end report!';
console.log(accountingDept.LastReport);
