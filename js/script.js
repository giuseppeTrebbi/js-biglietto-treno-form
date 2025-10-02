const kilometri = document.getElementById("kilometri");
const età = document.getElementById("anagrafica");
const bottone = document.getElementById("bottone");
const card = document.querySelector(".card-body");
let prezzo = 0;



bottone.addEventListener("click", function () {
    if (età.value == "" || kilometri.value == "") {
        alert("Inserire i dati");
    }else if (età.value < 18) {
        prezzo = kilometri.value * 0.21 * 4 / 5;
    } else if (età.value > 65) {
        prezzo = kilometri.value * 0.21 * 3 / 5;
    } else {
        prezzo = kilometri.value * 0.21;
    }
    card.innerHTML = `${prezzo.toFixed(2)} €`;
    età.value = "";
    kilometri.value = "";
});














