var message = "Ola mundo";
console.log(message);
var episodio = 4;
console.log("Quantos episodios" + 4);
episodio = episodio + 1;
console.log("Episodio e" + episodio);
var favorito;
favorito = '88-8';
console.log("Meu favorito" + favorito);
/*Declarando funções*/
var isEnoughtToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
console.log("Is " + distance + " parsecs enought to be Millenium Falcom ? " + (isEnoughtToBeatMF(distance) ? 'YES' : 'NO'));
/*Função padrao do typescript*/
var call = function (name) { return console.log("Do you copy, " + name + " ?"); };
call('R2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5,1) = " + inc(5, 1));
console.log("inc (5,1) = " + inc(5));
