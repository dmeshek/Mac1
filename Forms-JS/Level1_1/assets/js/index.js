function VerdoppelMich(){
    let inputNumber = document.querySelector("#alter").value;
    let dieVerdoppelteZahl = inputNumber*2;
    console.log(dieVerdoppelteZahl);
    document.getElementById("ergebnis").innerHTML = dieVerdoppelteZahl;
}

