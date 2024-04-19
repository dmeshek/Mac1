// # Wiederholung
// * Counter -> functions und inner.HTML

let outputValue = 0
const outputCalc = document.querySelector(".output-calc");
//console.log(outputCalc);

function superFunction (operator) {
outputValue = outputValue + operator;

outputCalc.innerHTML = outputValue;
}

function malZwei(){
outputValue = outputValue *2;

outputCalc.innerHTML = outputValue;

}

function reset(){
    outputValue = 0;
    outputCalc.innerHTML = outputValue
}

// * Funktion ein Argument übergeben
// ? Parameter = Platzhalter bei der Definition der Funktion
// ? Argument = der Wert der an die Funktion übergeben wird, wenn sie aufgerufen wird
// ? man merke: man vergibt erst den Parameter und das Argument kommmt später

function sayHi(name){
const outputDiv = document.querySelector(".btn-output");
outputDiv.innerHTML = `Hallo ${name}`;
}


// ! NEUE THEMEN
// # VALUE AUSLESEN

function getInputValue(){
    let name = document.querySelector(".name").value; 
    // wir greifen auf den Wert vom inputfeld mit der Klasse "name" zu

    let age = Number(document.querySelector(".number").value);
    //% Funktion Number () konvertiert beliebige Werte in numerische Werte

    //     console.log({name}, {age});

let range = Number(document.querySelector(".range").value); 

let checkbox = document.querySelector(".checkbox").checked;
// fragt ab ob die checkbox angewählt ist -> ich bekomme true oder false zurück

let date = document.querySelector(".bday").value;

console.log({name}, {age},{range}, {checkbox}, {date});

}



// CONDITIONAL STATEMENT  if / else 
//? if/else führt Anweisungen nur aus wenn eine Bedingung wahr ist, der optionale else-Zweig wird ausgeführt wenn die 
//? Bedingung nicht wahr ist (die im if abgefragt werden)

let age = 20;

if (age >= 18){
    console.log("du bist volljährig");

}
else {
    console.log("du bist minderjährig");
}

//? wir können  unendeliche viele else if bedingungen abfragen
//? && fügt eine und-Bedingung hinzu-> man verknüpft zwei oder mehrere Bedingung durch "und"-> beide bzw alle Bedingungen müssen erfüllt sein, damit die gesamte bedingung erfüllt ist.

// ? fügt eine Bedingung oder hinzu -> man verknüpft zwei oder mehrere Bedingungen durch "oder" +> es genügt wenn eine der Bedingungen erfüllt ist, damit die gesamte Bedingung erfüllt ist.


// # LOGIN 
let username = "dion"
let password ="supercode"

function checkUserData(){
    const loginUsername = document.querySelector("#username").value;
    const loginPassword = document.querySelector("#password").value;

    const loginFeedback = document.querySelector("#login-feedback");

if (username === loginUsername && password === loginPassword){
    loginFeedback.innerHTML ="Login war erfolgreich";
} else {
    loginFeedback.innerHTML ="login war nicht erfolgreich";
}

}



// add, remove, toggle -> classList
//? classList ändert CSS-klassen eines Elements (mit add,)