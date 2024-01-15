let numeroUtente
do{
    numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
} while (numeroUtente < 1 || numeroUtente > 5 || isNaN(numeroUtente) === true);

let sceltaUtente
do{
    sceltaUtente = prompt("Inserisci pari o dispari");
} while (sceltaUtente !== "pari" && sceltaUtente !== "dispari");

function randomNum (max, min){
    return Math.floor((Math.random() * max) + min);
}

let numeroPc = randomNum(5, 1);
console.log(`${numeroUtente}`, `${numeroPc}`);



function isEven (numero){
    let even = false
    if (numero % 2 === 0){
        even = true;
    } else {
        even = false;
    }
    
    return even;
}

let userPcSum = numeroUtente + numeroPc;

if (isEven(userPcSum) === true && sceltaUtente === "pari"){
    document.writeln(`Hai vinto la somma è pari: ${userPcSum}`);
} else if(isEven(userPcSum) === false && sceltaUtente === "dispari"){
    document.writeln(`Hai vinto la somma è dispari: ${userPcSum}`);
} else {
    document.writeln(`Hai perso la somma è: ${userPcSum}`);
}