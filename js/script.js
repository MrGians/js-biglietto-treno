// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va stampato in pagina forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// BONUS:
// Abbellire il risultato finale in pagina a piacimento, mostrando informazoni extra (ad esempio comunicando all'utente che ha ricevuto un determinato sconto...)


/* 
- Chiedere all'utente il numero di chilometri da percorrere
- Chiedere all'utente la sua età
- Definire il prezzo del biglietto (0,21 € al KM)
- Validazione inserimento Chilometri Utente
- Validazione inserimento età utente
- Calcolo eventuale scontistica del prezzo finale
- Calcolare il prezzo Finale del biglietto * KM scelti dall'utente
- Output del prezzo finale con massimo 2 decimali stampato su pagina

- Bonus
*/

// #1 Chiedere all'utente il numero di chilometri da percorrere
let userKm = document.getElementById("user-km");
userKm = parseInt(prompt("Quanti Chilometri (KM) vuoi percorrere?", 10));
console.log("Chilometri: " + userKm);

// #2 Chiedere all'utente la sua età
let userAge = document.getElementById("user-km");
userAge = parseInt(prompt("Quanti anni hai?", 24));
console.log("Anni Passeggero: " + userAge);

// #3 Definizione prezzo del biglietto (0,21 € al KM)
let ticketPrice = document.getElementById("ticket-price");
ticketPrice = 0.21;
console.log("Prezzo Biglietto: " + ticketPrice + "€");


// #4 Validazione inserimento Chilometri
if (!isNaN(userKm) && userKm > 0) {

  console.log("KM: è tutto giusto!")


// #5 Validazione inserimento età
if (!isNaN(userAge) && userAge > 0) {

  console.log ("Età: è tutto giusto!")
  // #6 Calcolo eventuale scontistica del prezzo finale
  if (userAge <= 18) {

    ticketPrice = ticketPrice - (ticketPrice / 100 * 20);
    console.log("HAI RICEVUTO -20% di SCONTO!");

  } else if (userAge >= 65) {

    ticketPrice = ticketPrice - (ticketPrice / 100 * 40);
    console.log("HAI RICEVUTO -40% di SCONTO!");
  } else {
    console.log("NON HAI DIRITTO ALLO SCONTO!")
  }

  // #7 Calcolo prezzo del biglietto * Km utente
  let ticketFinalPrice = document.getElementById("ticket-final-price");
  ticketFinalPrice = (ticketPrice * userKm).toFixed(2);
  console.log("Prezzo Finale del Biglietto: " + ticketFinalPrice + "€");

  
} else {
  console.log ("Età: hai inserito un NaN nell'età!")
}


} else {

  console.log("KM: hai inserito un NaN nei KM!")
}



// #8
// #9