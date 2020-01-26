class Spacecraft {

    /*Declarando o construtor*/
    constructor (public propulsor: string){

    }
    /*Declarando o metado*/
    jumpIntoHyperspace(){
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }

}

/*Declarando INTERFACE */
interface Containership {

    /*Atributo*/
    cargoContainers: number
}
/* export e um modulo que recebe como argumento as Classe e Interfaces*/
export {Spacecraft, Containership} 