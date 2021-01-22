// Etape 1

console.log("Go Chuck !");
let maDiv = document.querySelector("main > section > aside > div");
// console.log(maDiv);
maDiv.addEventListener('mouseenter', () => {
    maDiv.style.borderRadius = 0;
});
maDiv.addEventListener('mouseleave', () => {
    maDiv.style.borderRadius = '50%';
});


// Etape 2


let fleche = document.getElementsByClassName("picto");
// console.log(fleche);

for(let i = 0; i < fleche.length; i++) {
    fleche.item(i).addEventListener("click", () => {
        fleche.item(i).parentNode.nextElementSibling.style.visibility = "visible";
    });
};

// // Etape 3

import Menu from "/js/class.js";

const promise = fetch("data/menu.json");
console.log(promise);

promise.then(response => response.json())

.then(data => {
    for(let lien_head of data) {
        const lien_nav = new Menu(lien_head.nom, lien_head.lien);
        const affichage = lien_nav.volee();
        document.querySelector("main > header > nav").appendChild(affichage);
    }
});



// Test
// const requete = new XMLHttpRequest;
// requete.open("GET", "data/menu.json");
// requete.responseType = "json";
// requete.send();


// requete.onload = () => {
//     if(requete.status != 200) {
//         alert("Erreur " + requete.status + " : " + requete.statusText);
//     }
//     else {
//         const donnee = requete.response;
//         volee(donnee);
//     }
// }

// function volee(donnee) {
//     for (let i = 0; i< donnee.length; i++) {
//         console.log(donnee);
//         const men = document.createElement('ul');
//         const li = document.createElement('li');
//         const nav = document.createElement('a');

//         li.textContent = donnee[i]['principal'].nom;
//         nav.textContent = donnee[i].principal.lien;

//         li.appendChild(nav);
//         men.appendChild(li);
//         document.querySelector("main > header > nav").appendChild(men);
//     }
// }