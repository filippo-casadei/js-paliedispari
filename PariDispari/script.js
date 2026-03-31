// OBBIETTIVO: Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.,
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).,
// Sommiamo i due numeri,
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione),
// Dichiariamo chi ha vinto.

// ======================================================================================

// SCHEMA MENTALE: sicuramente dovrò inserire due prompt, uno per scegliere pari o dispari
//  e uno in cui inserire un numero da 1 a 5. 
// creo una funzione che chiamerò: function numeroPc () { } 
// all'interno della funzione inserirò i comandi math.floor e math.random in modo che mi
// generi un numero random intero da 1 a 5. 
// Chiuderò la funzione con un return che sarà uguale al numero ottenuto generato 
// randomicamente. Fuori dalla funzione creerò un'altra variabile che sarà il risultato della
//  somma fra il numero scelto dall'utente e quello generato per il pc.
// Con un altra funzione chiederò se questo numero sarà % 2 e in quel caso avrò come risultato
//  0 o 1 e quindi potrò inserire if 0 pari else dispari.
// dovrò poi confrontare la scelta dell'utente con il risultato ottenuto e dichiarare il
// vincitore in console.log

// =======================================================================================

const inserisciScelta = prompt("Inserisci pari o dispari");
const inserisciNumero =prompt("Inserisci un numero da 1 a 5");
const numeroUtente = Number(inserisciNumero);

function numeroRandom () {
    return (Math.floor(Math.random() *5)+1);
    
}

let numeroRandomPc = numeroRandom();

let sommaDeiDueNumeri = numeroRandomPc + numeroUtente;

