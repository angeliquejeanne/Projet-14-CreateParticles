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
class Particles {
    conctructor()
}