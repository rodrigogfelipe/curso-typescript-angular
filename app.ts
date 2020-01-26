class Spacecraft {

    /*Declarando o construtor*/
    constructor (public propulsor: string){

    }
    /*Declarando o metado*/
    jumpIntoHyperspace(){
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }

}

/**Instaciando a Classe OBJ */
    let ship = new Spacecraft('hyperdrive')
    ship.jumpIntoHyperspace()/**Obj ship invoca o metado jumpIntoHyperspace */

/*Declarando classe com herança Spacecraft*/
class MillenniumFalcon extends Spacecraft implements Containership {

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

    /*Instaciando o obj da classe */
    let falcon = new MillenniumFalcon()
    falcon.jumpIntoHyperspace()

    /*Declarando INTERFACE */
    interface Containership {

        /*Atributo*/
        cargoContainers: number
    }

    /*Declarando a funcao*/
    let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2
    console.log(`Is falcon good for the the job ${goodForTheJob (falcon) ? 'YES' : 'NO'} `)



    



