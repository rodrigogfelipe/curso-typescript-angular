"use strict";
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
var _ = require("lodash");
console.log(_.pad("Typescript Examples", 40, "="));
/**Instaciando a Classe OBJ */
var ship = new base_ships_1.Spacecraft('hyperdrive');
ship.jumpIntoHyperspace(); /**Obj ship invoca o metado jumpIntoHyperspace */
/*Instaciando o obj da classe */
var falcon = new starfighters_1.MillenniumFalcon();
falcon.jumpIntoHyperspace();
/*Declarando a funcao*/
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the the job " + (goodForTheJob(falcon) ? 'YES' : 'NO') + " ");
