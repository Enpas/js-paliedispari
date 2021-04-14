/* PALINDROMA */

// creo una variabile con prompt e chiedo all'utente di inserire una parola;
var userWord = prompt("inserisci una parola:");
// nomino la funzione palindroma e inserisco come parametro la parola inserita dall'utente;
palindroma(userWord);
// console.log(userWord) 

/* PALINDROMA - FUNCTION */

// creo una funzione che si assicura se la parola inserita è palindroma oppure no;
function palindroma(word) {
  // a questo punto scrivo due variabili vuote;
  var wordStart = "";
  var wordEnd = "";
  // creo due cicli for: con il primo misuro la prima parte della parola e la salvo nella variabile wordStart; con il secondo misuro la seconda parte della parola e la salvo nella variabile wordEnd; 
  for (var start = 0; start < (word.length / 2); start++) {
    wordStart += word[start];
  }
  for (var end = (word.length - 1); end > (word.length / 2) - 1; end--) {
    wordEnd += word[end];
  }
  //console.log(wordStart);
  //console.log(wordEnd);

  // nel caso in cui la prima e la seconda parte della parola sono uguali il programma afferma che la parola è palindroma, in caso contrario inserisce la negazione;
  if (wordStart === wordEnd) {
    console.log("la parola da te inserita '" + word + "' è palindroma.");
  } else {
    console.log("mi dispiace, ma la parola da te inserita '" + word + "' non è palindroma. Riprova!");
  }
}



/* PARI E DISPARI */

// creo due variabili con prompt e chiedo all'utente di scegliere tra pari e dispari, e di inserire un numero che va da 1 a 5;
var choice = prompt("scegli pari o dispari:");
var userNum = parseInt(prompt("inserisci un numero da 1 a 5:"));
// nomino la funzione evenOdd e inserisco come parametri choice e il numero scelto ed inserito dall'utente;
evenOdd(choice, userNum);
// console.log(choice)
// console.log(userNum)

/* PARI E DISPARI - FUNCTION */

// creo una funzione che simula pari e dispari, e visualizzo il numero scelto dall'utente;
function evenOdd(userChoice, num) {
  console.log("il tuo numero è: " + num);
  // utilizzo la proprietà 'Math.floor(Math.random()' per generare un numero random tra 1 e 5 che sarà il numero del pc e lo visualizzo;
  var numPc = Math.floor(Math.random() * 5) + 1;
  console.log("il numero del pc è: " + numPc);
  // sommo il numero dell'utente a quello del pc e lo visualizzo;
  var somma = numPc + num;
  console.log("la somma dei due numeri è: " + somma);

  // utilizzo uno switch per controllare se vince l'utente oppure il pc, e visualizzo la vincita o la sconfitta + il caso in cui l'utente scrive in modo errato "pari" o "dispari";
  switch (userChoice) {
    case "pari":
      if (somma % 2 === 0) {
        console.log("hai vinto");
      } else {
        console.log("hai perso");
      }
      break;
    case "dispari": 
      if (somma % 2 === 0) {
        console.log("hai vinto");
      } else {
        console.log("hai perso");
      }
      break;
    default:
      console.log("Attenzione, non hai scritto correttamente 'pari' o 'dispari'. Riprova!");
  }

}


