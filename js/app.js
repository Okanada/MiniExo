import { Personne } from "./personne.js"
import { gravite } from "./personne.js"
import { bouilloire } from "./bouilloire.js"
import { water } from "./bouilloire.js"




// Groupe 


let groupe = [];
let name = ["meliodas", "escanor", "king", "ban", "gowther", "merlin", "diane", "kizaru", "aokiji", "akainu"];



let cinema = [];
let nightClub = [];

//Boucle répétée 10 fois avec personne générée entre 0 et 10
for (let i = 0; i < 10; i++) {
    groupe[i] = new Personne(name[Math.floor(Math.random() * 10)])

};

// SI -18ans --> cinema SINON --> nightClub
groupe.forEach(element => {
    if (element.age < 18) { cinema.push(element) }
    else { nightClub.push(element) }

});


// Le bouilloire

let Bouilloire = new bouilloire();
let Water = new water();


Bouilloire.contenu.push(Water);












