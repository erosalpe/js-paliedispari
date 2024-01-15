let numeroUtente
do{
    numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
} while (numeroUtente < 1 || numeroUtente > 5);

function randomNum (max, min){
    return Math.floor((Math.random() * max) + min);
}

let numeroPc = randomNum(5, 1);
console.log(`${numeroUtente}`, `${numeroPc}`);
