class Voiture {
    constructor(id,
        marque,
        modele,
        annee,
        prix,
        kilometrage,
        carburant,
        autoManu,
        puissance,
        portes,
        places,
        options) {
        this.id = id;
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        this.prix = prix;
        this.kilometrage = kilometrage;
        this.carburant = carburant;
        this.autoManu = autoManu;
        this.puissance = puissance;
        this.portes = portes;
        this.places = places;
        this.options = options;
    }
}

function rechercher() {
    const inputUser = document.getElementById("userInput");
    const test = document.querySelector(".texte-carousel p")
    test.innerText = inputUser.value;
    persistenceDonnee(inputUser.value);
}

function persistenceDonnee() {
    const marque = document.getElementById("marque");
    const modele = document.getElementById("modele");
    const carburant = document.getElementById("carburant");
    const prixMin = document.getElementById("prixMin");
    const prixMax = document.getElementById("prixMax");
    const anneeMin = document.getElementById("anneeMin");
    const anneeMax = document.getElementById("anneeMax");
    const nbPortes = document.getElementById("nbPortes");
    const auto = document.getElementById("auto");
    console.log(`La saisie utilisateur donne ${marque.value}, ${modele.value}, ${carburant.value}, ${prixMin.value}, ${prixMax.value} ${anneeMin.value}, ${anneeMax.value}, ${nbPortes.value}, ${auto.value}.)`)
}


const form = document.querySelector("form");
const log = document.querySelector("#log");

form.addEventListener("submit", (event) => {
  const data = new FormData(form);
  let output = "";
  for (const entry of data) {
    output = `${output}${entry[0]}=${entry[1]} et ensuite`;
  }
  log.innerText = output;
  event.preventDefault();
});