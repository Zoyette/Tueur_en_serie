"use script"

let tueur= "Jason"
let pv = 100
// on créé le tueur
class Abruti {
    constructor(name, pdv, attaque, revers) {
      this.name = name; // nom de la caractérisque
       this.pdv = pdv; // probabilité de mourir
      this.attaque = attaque; // prob de dégats
      this.revers=revers; //prob de dégats en mourant
     
    }

    // Attaquer un perso :
    attaquer(cible) {
      if (Math.random() < this.attaque) {
        console.log(`${this.name} attaque ${cible.name} et lui inflige ${this.attaque} points de dégâts.`); // réussite
      } else {
        console.log(`${this.name} rate son attaque contre ${cible.name}.`);// échec
      }
    }
}
// conditions de victoire + défaite
    if (pv <= 0) {
        console.log("Le tueur a été vaincu par les joueurs. Bravooo !");
      } else {
        console.log("Les joueurs sont tous morts, RIP.");
      }
      
// on créé nos caractéristiques
let Princesse = new Abruti("Princesse",0.2,0.1,0.7);
let Sportif = new Abruti("Sportif",0.1,0.8,0.1);
let Nerd = new Abruti("Nerd",0.4,0.4,0.2);
let Intello = new Abruti("Intello",0.1,0.1,0.8);
let Pervers = new Abruti("Pervers",0.8,0.1,0.1);

// on créé nos personnages
let tableauAbrutis=["Bethany","Brandon","Britney","Bloom","BK","Barbecue","Barbe Bleue","Barbie","Brebis","Beverly"];

// puis on créé la fonction aléatoire 
function getRandomInt(min, max) {
    min = Math.ceil(min);  
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min;}
//  puis un second tableau pour faire l'aléatoire des caractéristiques
let tableauSurvivants=[new Abruti("Princesse",0.2,0.1,0.7),new Abruti("Sportif",0.1,0.8,0.1),new Abruti("Nerd",0.4,0.4,0.2),new Abruti("Intello",0.1,0.1,0.8),new Abruti("Pervers",0.8,0.1,0.1)];

let joueur = console.log(tableauAbrutis[(getRandomInt(0, tableauAbrutis.length))]); // aléatoire nom
let joueur2 = console.log(tableauSurvivants[(getRandomInt(0, tableauAbrutis.length))]); // aléatoire caractéristique
 

// ici c'est la boucle de comment fonctionne les tours
   let tour = 1;
   while (pv > 0 && joueur.pdv > 0) {
     console.log(`Tour ${tour}:`);
   
     tueur.attaquer(joueur2);
   
     if (joueur2.pdv <= 0) {
       console.log(`${tueur} a vaincu les joueurs !`);
       break; 
     }
   
     joueur2.attaquer(tueur);
   
     
     if (pv <= 0) {
       console.log(`${joueur.name} a vaincu le tueur !`);
       break; 
     }
    }

// mon soucis est que j'arrive pas à relier mes joueurs et ma boucle.
// j'ai pas réussi à relier à la fois le nom et la caractéristique et mon code est perdu car pour avoir un aléatoire j'ai placé mes caractéristiques dans un tableau 
// c'est malheureusement une non réussite pour ma part :(