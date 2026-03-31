// OBBIETTIVO: capire se una parola è palindroma, ossia che si legge uguale anche al
// contrario.

// ===================================================================================

// STEPS:
// 1- Chiedere all'utente una parola
// 2- Creare una funzione che: - prenda una parola come input
//                             - capisca se al contrario è uguale
// 3 - se sono uguali --> è palindroma
// 4- Se sono diverse --> non è palindroma

// ===================================================================================


// variabile costante uguale ad un prompt che richiede all'utente di inserire 
// una parola.
const parolaUtente = prompt("Inserisci una parola");

// scheletro della funzione:
// Aggiungo alla funzione una variabile per la parola invertita vuota perchè andrà composta
// con un ciclo for.
// ciclo for: parte dalla lunghezza della parola -1, quindi dal fondo e fino a quando non
// arriva all'indice 0 continua a "girare" al contrario, quindi dall'ultima lettera della
// parola fino alla lettera che come indice avrà 0.
// inseriti all'interno della funzione if ed else in modo da ottenere come risultato true
// o false a seconda che "parolainvertita" sia uguale o diversa da quella inserita.

function palindromo (parola) {
    let parolaInvertita = "";

    for (let i = parola.length -1; i >= 0; i--) {
        parolaInvertita = parolaInvertita + parola[i]
        }
    if (parolaInvertita === parola) {
        return true;
    }
    else {
        return false;
    }
}
// inserita una variabile const = risultato che è uguale al risultato true/false che 
// restituisce la funzione.
// inseriti console.log per stampare in console messaggi diversi a seconda del risultato.

 const risultato = palindromo(parolaUtente);
 if (risultato === true) {
    console.log("E' UN PALINDROMO");
 } else {
    console.log("NON E' UN PALINDROMO");
 }



