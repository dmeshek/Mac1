
//Function Level 1_1
function VerdoppelMich(){
    let inputNumber = document.querySelector("#alter").value;
    let dieVerdoppelteZahl = inputNumber*2;
    console.log(dieVerdoppelteZahl);
    document.getElementById("ergebnis").innerHTML = dieVerdoppelteZahl;
}

//Function Level 1_2
function berechneAlter(){
    let inputJahr = document.querySelector("#jahr").value;
    let AlterInJahr = 2024 - inputJahr;
    console.log(AlterInJahr);
    document.getElementById("ergebnisZwei").innerHTML = `du bist${AlterInJahr} Jahre Alt`;
}
