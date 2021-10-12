// On va créer un première petite bulle/particule
// Pour cela on selectionner notre canvas
const canvas = document.getElementById('canvas_1');
// Ensuite nous allons prendre un context dans lequel nous allons lui passer un argument 2d
const context = canvas.getContext('2d');
// Concrètement cela veut dire que nous allons utiliser un environnement 2d pour la création de forme (bulle, trait ect) dans notre canvas

context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;
// Même si cela est déjà spécifier dans la partie CSS nous le refaisons ici en lui disant qu'il doit prendre la largeur et la hauteur en 100%

// On créait une class 
// Une class sert à créer des objets, c'est présent depuis ES6 (2015)
// C'est venu remplacer le fonction constructeur avec utilisation de prototype ect... (chose qui était compliquer à écrire ou a comprendre)
// Ca permet de créer des objets plus facilement, on l'utilise pour faire de l'orienté objet ce que l'on va faire ici (même si c'est une toute petite app)
// Dans les class il existe une methode constructor, elle sert à gérer les propiétés qui vont être créer dans l'objet que l'on va créer avec la class
// Il va y avoir une position sur x,y puis une direction sur x et sur y, vitesse, taille, couleur
class Particles {
    conctructor(x, y, directionX, directionY, taille, color){
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
        context.beginPath(); //on commence un dessin
        context.arc(this.x, this.y, this.taille, 0, Math.PI * 2, false); //nous permet de faire des ronds/particules, on va préciser sa position sur x et y, sa taille, le 0 est pour l'angle de départ et avex Math.PI*2 cela donne un cercle complet, false est pour le sens horraire ou son contraire
    }
}
// On va créer des objets avec ces class, on va utiliser new qui va utiliser notre constructeur ligne 19
// Tous les arguments que l'on a passer correspondent aux paramètres du constructor ligne 19,ça va devenir les propriétés de notre objet lignes 21 à 26
// const object1 = new Particles(10,10,50,50,90,"yellow"); 
// console.log(object1)


