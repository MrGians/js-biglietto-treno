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

// Chiedere all'utente il numero di chilometri da percorrere
const userKm = document.getElementById("user-km");
const userKmValue = parseInt(prompt("Quanti Chilometri (KM) vuoi percorrere?", 10));

console.log("Chilometri: " + userKmValue);


// Chiedere all'utente la sua età
const userAge = document.getElementById("user-age");
const userAgeValue = parseInt(prompt("Quanti anni hai?", 24));

console.log("Anni Passeggero: " + userAgeValue);


// Definizione prezzo del biglietto (0,21 € al KM)
const ticketPrice = document.getElementById("ticket-price");
let ticketPriceValue = 0.21;
ticketPrice.innerText = ticketPriceValue + "€";

console.log("Prezzo Biglietto: " + ticketPriceValue + "€");


// Dichiarazione Global Scope del Prezzo Finale del ticket
const ticketDiscount = document.getElementById("ticket-discount");
const ticketFinalPrice = document.getElementById("ticket-final-price");



// Validazione inserimento Chilometri
if (!isNaN(userKmValue) && userKmValue > 0) {
  userKm.innerText = userKmValue + " Km";  
} else {
  userKm.innerText = "Valore non valido";
}


// Validazione inserimento età
if (!isNaN(userAgeValue) && userAgeValue > 0) {

  userAge.innerText = userAgeValue + " Anni";
  
  
  // Calcolo eventuale scontistica del prezzo finale  
  if (userAgeValue <= 17) {

    ticketPriceValue = (ticketPriceValue - (ticketPriceValue / 100 * 20)).toFixed(2);
    ticketPrice.innerHTML = `<del class="del-price">0.21€</del> ${ticketPriceValue}€`;
    ticketDiscount.innerHTML = '<span class="discount-price">20%</span>';

  } else if (userAgeValue >= 65) {

    ticketPriceValue = (ticketPriceValue - (ticketPriceValue / 100 * 40)).toFixed(2);
    ticketPrice.innerHTML = `<del class="del-price">0.21€</del> ${ticketPriceValue}€`;
    ticketDiscount.innerHTML = '<span class="discount-price">40%</span>';

  } else {
    ticketDiscount.innerText = "Nessuno Sconto Applicato";
  }

} else {
  userAge.innerText = "Valore non valido";
}

// Calcolo prezzo Finale del biglietto
const ticketFinalPriceValue = (ticketPriceValue * userKmValue).toFixed(2);
if (userKmValue < 1 || isNaN(userKmValue) || userAgeValue < 1 || isNaN(userAgeValue)) {
  ticketFinalPrice.innerText = "Non Calcolabile";
  console.log("FALSO")
} else {
  ticketFinalPrice.innerText = ticketFinalPriceValue + "€";
  console.log("VERO")
}

