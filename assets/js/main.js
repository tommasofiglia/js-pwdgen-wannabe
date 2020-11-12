// Nome cognome colore preferito

// Variabile Nome
var name = prompt("Qual è il tuo nome?");

// Variabile Cognome
var surname = prompt("Qual è il tuo cognome?");

// Variabile Colore preferito
var color = prompt("Qual è il colore che ti piace di più?");

// Variabile Anno corrente (ultime due cifre)
var currentYear = parseInt(prompt("In che anno siamo?"));
var lastTwoNumbersYear = currentYear - 2000;


document.getElementById('password').innerHTML = name + surname + color + lastTwoNumbersYear;
