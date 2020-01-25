let message: string= "Ola mundo"
console.log(message)

let episodio: number = 4;
console.log("Quantos episodios" + 4)

episodio = episodio + 1
console.log("Episodio e" + episodio)

let favorito
favorito= '88-8'
console.log("Meu favorito" + favorito)

/*Declarando funções*/
let isEnoughtToBeatMF= function(parsecs: number): boolean {
    return parsecs < 12
}

let distance= 11
console.log(`Is ${distance} parsecs enought to be Millenium Falcom ? ${isEnoughtToBeatMF(distance) ? 'YES' : 'NO'}`)

/*Função padrao do typescript*/
let call = (name: string) => console.log(`Do you copy, ${name} ?`)
call('R2')

function inc (speed:number, inc: number = 1) : number {
    return speed + inc
}

/*Os dois consoles declarados imprimira o valor igual a  6*/
console.log(`inc (5,1) = ${inc(5,1)}`)
console.log(`inc (5,1) = ${inc(5)}`)