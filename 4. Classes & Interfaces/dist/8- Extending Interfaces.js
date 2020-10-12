"use strict";
var shit = (function () {
    function shit(name) {
        this.name = name;
    }
    Object.defineProperty(shit.prototype, "Name", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    shit.prototype.great = function (phrase) {
        console.log(phrase + " + " + name);
    };
    return shit;
}());
