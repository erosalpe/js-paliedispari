let parolaUtente
do{
    parolaUtente = prompt("Inserisci una parola")
} while (isNaN(parolaUtente ) === false);

const arrayReverse = [];




function isPalindrome(parola){
    const arrayBase = Array.from(parola);
    let x = arrayBase.length - 1;
    let flag = true;

    if (arrayBase.length % 2 == 0){

        let middleValue = arrayBase.length / 2;

        console.log(middleValue);

        for (let i = 0; i < middleValue; i++ && flag === true){

            if (arrayBase[i] === arrayBase[x] ){

                console.log(arrayBase[i], arrayBase[x]);

                x--;

            } else {
                flag = false;
            }
        }

        if (flag === true){
            document.writeln(`La parola ${arrayBase} è palindroma`)
        } else {
            document.writeln(`La parola ${arrayBase} non è palindroma`)
        }

    } else if (arrayBase.length % 2 !== 0){

        let middleValue = ((arrayBase.length / 2) - 0.5);

        console.log("il valore derivato da un numero dispari è:", middleValue);

        for (let i = 0; i < middleValue; i++ && flag === true){
            if (arrayBase[i] === arrayBase[x]){

                console.log(arrayBase[i], arrayBase[x]);

                x--;
            } else {
                flag = false;
            }
        }

        if (flag === true){
            document.writeln(`La parola ${arrayBase} è palindroma`)
        } else {
            document.writeln(`La parola ${arrayBase} non è palindroma`)
        }
    }    
}







function wordReverse (parola){

    const arrayBase = Array.from(parola);


    let indiceArrayReverse = arrayBase.length - 1;

    let letteraCorrente

    for(let i = 0; i < arrayBase.length; i++){

        //console.log(indiceArrayReverse);

        //console.log(arrayBase[indiceArrayReverse]);

        letteraCorrente = arrayBase[indiceArrayReverse];

        arrayReverse.push(letteraCorrente);

        indiceArrayReverse--;

        //console.log(arrayPalindromo, arrayBase);
    }

    document.writeln(`<br><br>La parola base è ${arrayBase}<br><br>La parola specchiata è ${arrayReverse}`);

}


isPalindrome(parolaUtente);
wordReverse(parolaUtente);