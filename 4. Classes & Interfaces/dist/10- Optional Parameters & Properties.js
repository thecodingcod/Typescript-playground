"use strict";
var xyz = (function () {
    function xyz(name) {
        this.name = name;
    }
    Object.defineProperty(xyz.prototype, "Name", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    return xyz;
}());
