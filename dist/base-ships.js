"use strict";
exports.__esModule = true;
var Spacecraft = /** @class */ (function () {
    /*Declarando o construtor*/
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    /*Declarando o metado*/
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
