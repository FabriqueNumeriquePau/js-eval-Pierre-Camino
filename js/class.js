class Menu {
    constructor(nom, lien){
        this.nom = nom;
        this.lien = lien;
    }
    volee = () => {
        const men = document.createElement('ul');
        const li = document.createElement('li');
        const nav = document.createElement('a');
        li.textContent = this.nom;
        nav.textContent = this.lien;
        li.appendChild(nav);
        men.appendChild(li);
        return men;
    }
}

export default Menu;