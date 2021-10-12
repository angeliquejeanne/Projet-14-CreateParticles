// On va créer un première petite bulle/particule
// Pour cela on selectionner notre canvas
const canvas = document.getElementById('canvas_1');
// Ensuite nous allons prendre un context dans lequel nous allons lui passer un argument 2d
const contxt = canvas.getContext('2d');
// Concrètement cela veut dire que nous allons utiliser un environnement 2d pour la création de forme (bulle, trait ect) dans notre canvas

contxt.canvas.width = window.innerWidth;
contxt.canvas.height = window.innerHeight;
// Même si cela est déjà spécifier dans la partie CSS nous le refaisons ici en lui disant qu'il doit prendre la largeur et la hauteur en 100%

let particleTable; //Création d'un tableau pour y mettre toutes nos particules

// On créait une class 
// Une class sert à créer des objets, c'est présent depuis ES6 (2015)
// C'est venu remplacer le fonction constructeur avec utilisation de prototype ect... (chose qui était compliquer à écrire ou a comprendre)
// Ca permet de créer des objets plus facilement, on l'utilise pour faire de l'orienté objet ce que l'on va faire ici (même si c'est une toute petite app)
// Dans les class il existe une methode constructor, elle sert à gérer les propiétés qui vont être créer dans l'objet que l'on va créer avec la class
// Il va y avoir une position sur x,y puis une direction sur x et sur y, vitesse, taille, color
class Particles {
    constructor(x, y, directionX, directionY, taille, color){
        // On va lier les paramètres avec des this, this représente une propriété que l'on va lier a un paramètre
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.taille = taille;
        this.color = color;
    }
    // Maintenant on va dessiner les bulles/cercles en fonction des objets que l'on va créer sur le canvas
    // On va créer un méthode, une méthode est une fonction dans un objet, on peut la créer directement dans notre class, elle sera directement ajouter a nos objets
    draw(){ 
        contxt.beginPath(); //on commence un dessin
        contxt.arc(this.x, this.y, this.taille, 0, Math.PI * 2, false); //nous permet de faire des ronds/particules, on va préciser sa position sur x et y, sa taille, le 0 est pour l'angle de départ et avex Math.PI*2 cela donne un cercle complet, false est pour le sens horaire ou anti-horaire
        // Tous les this font références à ce que l'on va remplir dans notre object
        contxt.fillStyle = this.color; // On va lui donner une color
        contxt.fill(); // cela va le dessiner/remplir
    }
    MAJ(){
        if(this.x + this.taille > canvas.width || this.x - this.taille < 0) {
            this.directionX = -this.directionX;
        }
        if(this.y + this.taille > canvas.height || this.y - this.taille < 0){
            this.directionY = -this.directionY;
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    }
}
// On va créer des objets avec ces class, on va utiliser new qui va utiliser notre constructeur ligne 19
// Tous les arguments que l'on a passer correspondent aux paramètres du constructor ligne 19,ça va devenir les propriétés de notre objet lignes 21 à 26
// const object1 = new Particles(300,300,40,40,100,"red"); 
// console.log(object1)
// object1.draw();
function init(){
    particleTable = [];
    for(let i = 0; i < 100; i++){
        let taille = (Math.random() + 0.01) * 20;
        let x = Math.random() * (window.innerWidth - taille * 2)
        let y = Math.random() * (window.innerHeight - taille * 2)
        let directionX = (Math.random() * 0.4) - 0.2;
        // -0.2 / 0.2
        let directionY = (Math.random() * 0.4) - 0.2;
        let color = "yellow";

        particleTable.push(new Particles(x,y,directionX,directionY,taille, color));
    }
}

function animate(){
    requestAnimationFrame(animate);
    contxt.clearRect(0,0,window.innerWidth, window.innerHeight);

    for(let i = 0; i < particleTable.length; i++){
        particleTable[i].MAJ();
    }
}

init();
animate();
console.log(particleTable);

function resize(){
    init();
    animate();
}

let doit;
window.addEventListener('resize', () => {
    clearTimeout(doit);
    doit = setTimeout(resize, 10);
    contxt.canvas.width = window.innerWidth;
    contxt.canvas.height = window.innerHeight;
})
