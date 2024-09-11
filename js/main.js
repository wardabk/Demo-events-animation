
// Gestionnaire d'événement 1
function doubleClic () {
    zone.innerText = 'Developpement Web Fullstack!'; 
    // gsap.to('#zone', { opacity: 0, duration: 2 });
}
document.getElementById('zone').addEventListener('dblclick',doubleClic);

 //Gestionnaire d'événement 2
 function over () {
    zone.style.backgroundColor = 'orange';
    gsap.to('#zone', { rotation:360, duration: 3});
}
document.getElementById('zone').addEventListener('mouseover',over);


// Gestionnaire d'événement 3
function simpleClic () {
    zone.style.borderRadius = "50%";
    gsap.to('#zone', {x: 500,backgroundColor: 'red', duration: 3});
}
document.getElementById('zone').addEventListener('click',simpleClic);

// Gestionnaire d'événement 4
function out () {
    zone.style.backgroundColor = 'green';
    Draggable.create('#zone', {
        type:'x,y',
       inertia:'true',
      });
   
}
document.getElementById('zone').addEventListener('mouseout',out);

// Gestionnaire d'événement 5 
function bordure () {
    zone.style.border = '5px solid black';
    gsap.to('#zone', { scale: 1.2, duration: 2 });
    }
document.addEventListener('keydown', bordure);

