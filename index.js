// Aprire il Terminale e inserire ---> node ./index.js

let Domanda1 = "1. Cos'è un algoritmo?";
let Domanda2 = "2. Cosa sono le variabili?";
let Domanda3 = "3. undefined e null sono la stessa cosa?";

let algoritmo =
  "È un insieme di istruzioni che utilizza gli input per produrre gli output";
let variabili =
  "Sono come dei cassetti in cui è possibile riporre dei dati per memorizzarne le informazioni";
let undefined;
let _null = null;
let rispostaNumero3;

if ((undefined = _null)) {
  rispostaNumero3 = "Si, sono la stessa cosa";
} else {
  rispostaNumero3 =
    "No, undefined indica che una variabile non è stata dichiarata, null indica che una variabile è stata dichiarata ma non ha nessun valore";
}

console.log();
console.log(Domanda1);
console.log(" - " + algoritmo + " -");
console.log();
console.log(Domanda2);
console.log(" - " + variabili + " -");
console.log();
console.log(Domanda3);
console.log(" - " + rispostaNumero3 + " -");

// Aprire il Terminale e inserire ---> node ./index.js
