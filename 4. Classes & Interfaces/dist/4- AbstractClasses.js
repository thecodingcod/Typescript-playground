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
var Department__ = (function () {
    function Department__(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department__.prototype.AddEmployee = function (name) {
        this.employees.push(name);
    };
    return Department__;
}());
var ITDept_ = (function (_super) {
    __extends(ITDept_, _super);
    function ITDept_(id) {
        var _this = _super.call(this, id, "IT") || this;
        _this.administrators = [];
        return _this;
    }
    ITDept_.prototype.AddAdministrator = function (name) {
        this.administrators.push(name + ": SysAdmin");
    };
    ITDept_.prototype.AddEmployee = function (name) {
        this.employees.push(name + ": Developer");
    };
    ITDept_.prototype.Describe = function () {
        console.log("This is the shitty department of (IT....)");
        console.log(this.id + ": " + this.name);
    };
    return ITDept_;
}(Department__));
var Accounting_ = (function (_super) {
    __extends(Accounting_, _super);
    function Accounting_(id) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = [];
        _this.lastReport = _this.reports.length > 0 ? _this.reports[0] : "";
        return _this;
    }
    Object.defineProperty(Accounting_.prototype, "LastReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("No Report Found.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Accounting_.prototype, "MostRecentReport", {
        set: function (value) {
            if (!value) {
                throw new Error("Value is empty");
            }
            this.AddReport(value);
        },
        enumerable: false,
        configurable: true
    });
    Accounting_.prototype.AddReport = function (content) {
        this.reports.unshift(content);
        this.lastReport = this.reports[0];
    };
    Accounting_.prototype.AddEmployee = function (name) {
        this.employees.push(name + ": Accountant");
    };
    Accounting_.prototype.Describe = function () {
        console.log("This is the cool department of (Accounting....)");
        console.log(this.id + ": " + this.name);
    };
    return Accounting_;
}(Department__));
var _accountingDept = new Accounting(1);
_accountingDept.AddEmployee("Sayed");
_accountingDept.AddEmployee("Hamada");
_accountingDept.AddEmployee("Hamad");
try {
    console.log(_accountingDept.LastReport);
}
catch (error) {
    console.log(error.message);
}
_accountingDept.AddReport("Fucker can't just fuck!");
_accountingDept.AddReport("Fucker can't do shit!");
_accountingDept.AddReport("Suckers eat shit!");
console.log(_accountingDept.LastReport);
_accountingDept.MostRecentReport = "Year end report!";
console.log(_accountingDept.LastReport);
