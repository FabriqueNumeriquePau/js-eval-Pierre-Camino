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


const article = document.querySelectorAll("main > section > section > article > header");

article.forEach(fleche => {
    fleche.addEventListener("click", clic => {
        const div = fleche.nextSibling;
        if(div.style.visibility !== "visible") {
            div.style.visibility = "visible";
            div.style.height = "auto";
        }
        else {
            div.style.visibility = "hidden";
            div.style.height = "0px";
        }
    })
})

// for(let i = 0; i < fleche.length; i++) {
//     fleche.item(i).addEventListener("click", () => {
//         if(fleche.item(i).parentNode.nextElementSibling.style.visibility = "hidden"){
//             fleche.item(i).parentNode.nextElementSibling.style.visibility = "visible"
//         }
//         else {
//             fleche.item(i).parentNode.nextElementSibling.style.visibility = "hidden"
//         }
//     });
// };

// // Etape 3

import Menu from "/js/class.js";

const promise = fetch("data/menu.json");
console.log(promise);
const men = document.createElement("ul");
const men2 = document.createElement('ul');

promise.then(response => response.json())

.then(data => {
    for(let lien_head of data.principal) {
        const lien_nav = new Menu(lien_head.nom, lien_head.lien);
        const affichage = lien_nav.volee();
        men.appendChild(affichage);
        document.querySelector("main > header > nav").appendChild(men);
    }
    for(let lien_head of data.pied) {
        const lien_nav = new Menu(lien_head.nom, lien_head.lien);
        const affichage = lien_nav.volee();
        men2.appendChild(affichage);
        document.querySelector("main > footer").appendChild(men2);
    }
});



// Etape 4

import SousMenu from "/js/class.js";

const sousmenu = fetch("data/menu.json");
const sous = document.createElement("ul");

sousmenu.then(response => response.json())

.then(data => {
    const data2 = data.principal[1];
    const data3 = data2.sousmenus;
    console.log(data3);
    for(let lien_sous of data3) {
        const lien_2 = new SousMenu(lien_sous.nom, lien_sous.lien);
        const affichage = lien_2.sousmen();
        men.appendChild(affichage);
        document.getElementsByTagName("li")[1].appendChild(sous);
    }
});