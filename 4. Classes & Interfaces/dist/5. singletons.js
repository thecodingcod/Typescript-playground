"use strict";
var Universe = (function () {
    function Universe(width, galaxies) {
        this.width = width;
        this.galaxies = galaxies;
    }
    Universe.getInstance = function (width, galaxies) {
        if (!Universe.instance) {
            Universe.instance = new Universe(width, galaxies);
        }
        return Universe.instance;
    };
    return Universe;
}());
var universe = Universe.getInstance(124, 700);
console.log(universe);
var parallelUniverse = Universe.getInstance(435, 21321);
console.log(parallelUniverse);
