/* PALINDROMA */

// creo una variabile con prompt e chiedo all'utente di inserire una parola;
var userWord = prompt("inserisci una parola");
// nomino la funzione palindroma e inserisco come parametro la parola inserita dall'utente;
palindroma(userWord);
// console.log(userWord) 

/* PALINDROMA - FUNCTION */

// creo una funzione che si assicura che la parola inserita è palindroma oppure no;
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


