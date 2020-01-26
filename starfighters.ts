import { Spacecraft, Containership } from "./base-ships"

/*Declarando classe com herança Spacecraft*/
export class MillenniumFalcon extends Spacecraft implements Containership {

    cargoContainers: number /*declarando o atributo da classe interface*/
    constructor(){
        super('hyperdrive')
        this.cargoContainers= 4/*declarando atributo interface dentro do construtor recebendo valores */

    }

    jumpIntoHyperspace(){
        if(Math.random() >= 0.5){
            super.jumpIntoHyperspace()

        } else {
            console.log('Failes the jump into hyperspace')
        }
    }
}