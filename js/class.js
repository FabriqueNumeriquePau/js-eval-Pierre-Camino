class Menu {
    constructor(nom, lien){
        this.nom = nom;
        this.lien = lien;
    }
    volee() {
        const li = document.createElement('li');
        const nav = document.createElement('a');
        nav.textContent = this.nom;
        nav.href = this.lien;
        li.appendChild(nav);
        return li;
    }
}

export default Menu;