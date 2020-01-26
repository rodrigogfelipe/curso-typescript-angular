var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/**Instaciando a Classe OBJ */
var ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperspace(); /**Obj ship invoca o metado jumpIntoHyperspace */
/*Declarando classe com herança Spacecraft*/
var MillenniumFalcon = /** @class */ (function (_super) {
    __extends(MillenniumFalcon, _super);
    function MillenniumFalcon() {
        var _this = _super.call(this, 'hyperdrive') || this;
        _this.cargoContainers = 4; /*declarando atributo interface dentro do construtor recebendo valores */
        return _this;
    }
    MillenniumFalcon.prototype.jumpIntoHyperspace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHyperspace.call(this);
        }
        else {
            console.log('Failes the jump into hyperspace');
        }
    };
    return MillenniumFalcon;
}(Spacecraft));
/*Instaciando o obj da classe */
var falcon = new MillenniumFalcon();
falcon.jumpIntoHyperspace();
/*Declarando a funcao*/
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the the job " + (goodForTheJob(falcon) ? 'YES' : 'NO') + " ");
