
// Gestionnaire d'événement 1
//animation pour le double clic 
function doubleClic () {
    zone.innerText = 'Excellent! Vous avez cliqué deux fois'; 
    zone.style.border = '5px solid rgb(180, 186, 169)';
    gsap.set('#zone', { rotation: 0 });
    gsap.to('#zone', { rotation: 360, duration: 3});
}

document.getElementById('zone').addEventListener('dblclick',doubleClic);

 //Gestionnaire d'événement 2
 //animation pour le mouseover
 function over () {
    zone.innerText = 'Vous etes ici!'; 
    zone.style.backgroundColor = 'orange';
    gsap.to('#zone', { scale: 1.2, duration: 2 });
    }
   

document.getElementById('zone').addEventListener('mouseover',over);

// Gestionnaire d'événement 3
//animation pour le mouseover
function out () {
    zone.innerText = 'vous etes ailleurs!'; 
    zone.style.backgroundColor = 'green';
    gsap.to('#zone', { scale: 1, duration: 2 });  
}
document.getElementById('zone').addEventListener('mouseout',out);

// Gestionnaire d'événement 4
//animation pour la presse d'une touche de clavier
function saut () {
  
    gsap.to('#zone', { skewX: -20, duration: 1 });
    let tl = gsap.timeline();
    tl.to('#zone', {
      y: 100,             // Saut de 100px vers le haut
      duration: 0.5,       // Durée du saut
      ease: "power1.out"   // Adoucissement pour un saut plus naturel
  })
  .to('#zone', {
      y: 0,                // Revenir à la position initiale
      duration: 0.5,       // Durée du retour
      ease: "bounce.out"   // Effet de rebond lors de la retombée
  })
  // Troisième animation : rotation après le saut
  .to('#zone', {
      rotation: 360,       // Tourne à 360°
      duration: 2,
      ease: "power1.inOut"
  });


               }
document.addEventListener('keydown', saut);

// Gestionnaire d'événement 5
//animation pour le simple clic
function simpleClic () {
    zone.style.borderRadius = "50%";
    zone.innerText = 'Bravo! vous avez fait un clic simple'; 
    gsap.to('#zone', {x: 500,backgroundColor: 'red', duration: 3, yoyo: true, repeat: 1});
   
}
document.getElementById('zone').addEventListener('click',simpleClic);





