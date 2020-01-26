import{Spacecraft, Containership} from './base-ships'
import{MillenniumFalcon} from './starfighters'

/**Instaciando a Classe OBJ */
    let ship = new Spacecraft('hyperdrive')
    ship.jumpIntoHyperspace()/**Obj ship invoca o metado jumpIntoHyperspace */



    /*Instaciando o obj da classe */
    let falcon = new MillenniumFalcon()
    falcon.jumpIntoHyperspace()

    

    /*Declarando a funcao*/
    let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2
    console.log(`Is falcon good for the the job ${goodForTheJob (falcon) ? 'YES' : 'NO'} `)



    



