/* 1. Chiedi all’utente la eta, yes
2. chiedi al utente la distanza a percorrere, yes
3. se si puo, calcolare il respettivo sconto yes
4. Output del prezo in forma humana ( 2 decimali) 
5. confermare che si inseriscano numeri yes*/

//1
const age = parseInt( prompt('Inserisci la tua eta'));
//2
const distance = parseInt( prompt('Inserisci la distanza a percorrere in km'));
const km = 0.21
let datiValidi = true;
//5
if(isNaN(age)){
  message = 'Errore! Non hai inserito un numero';
  datiValidi = false;
  document.getElementById('output').innerHTML = message;
}
else if(isNaN(distance)){
  message = 'Errore! Non hai inserito un numero';
  datiValidi = false;
  document.getElementById('output').innerHTML = message;
}
//3
saluto = 'Ciao tuo biglietto costa';
fullprice = distance * km;
  if( age <= 10 ){
    //4
    ticketunderage = Math.abs (fullprice * 0.8).toFixed(2) 
    const message = saluto + " " + ticketunderage + "€";
    console.log(message);
    document.getElementById('output').innerHTML = message;}
  else if ( age >= 65 ){
    //4
    ticketadult = Math.abs (fullprice * 0.4).toFixed(2) 
    const message = saluto + " " + ticketadult + "€";
    console.log(message);
    document.getElementById('output').innerHTML = message;}
const message = saluto + " " + ( fullprice ) + "€";
console.log(message);
document.getElementById('output').innerHTML = message;
