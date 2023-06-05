//1.-Quitar enlaces
let enlace = document.querySelectorAll ("a");

for (let i = 0; i < enlace.length; i++) {
    enlace[i].addEventListener("click", quitarEnlace);
    
}
function quitarEnlace(evento) {
    evento.preventDefault();
};
//2.-Click en elementos
//2.1-Imagenes

let changeImg = document.querySelectorAll ("img");

for (let i = 0; i < changeImg.length; i++) {
    changeImg[i].addEventListener("click", cambiarImg); 
    
}
function cambiarImg(e) {
    e.target.src = "assets/magic-1.gif";
}
//2.2-Parrafos
let changeParrafos = document.querySelectorAll ("p");

for (let i = 0; i < changeParrafos.length; i++) {
    changeParrafos[i].addEventListener("click", cambiarParrafo); 
    
}
function cambiarParrafo(p) {
    p.target.style.color = "green";
    p.target.style.backgroundColor = "blue"
}
//2.3 Bloques de article o section
let changeArticleSection = document.querySelectorAll ("article, section");

for (let i = 0; i < changeArticleSection.length; i++) {
    changeArticleSection[i].addEventListener("click", cambiarArticuloSeccion)
    
}
function cambiarArticuloSeccion(as) {
    as.target.style.backgroundColor = "yellow"
}
//3.- Cuando el cursor este sobre darle un valor y cuando no este quitarselo.
//3.1-Imagenes
let porencimaImg = document.querySelectorAll ("img")

for (let i = 0; i < porencimaImg.length; i++) {
    porencimaImg[i].addEventListener("mouseover", encimaImg);
    porencimaImg[i].addEventListener("mouseout", volverImg); 
    
}
function encimaImg(eI) {
    eI.target.src = "assets/abracadabra.gif"
}
function volverImg(vI) {
    vI.target.src = vI.target.dataset.originalSrc;
}
//3.2-Parrafos
let parrafos = document.querySelectorAll("p");

for (let i = 0; i < parrafos.length; i++) {
  parrafos[i].addEventListener("mouseover", cambiarEstiloParrafo);
  parrafos[i].addEventListener("mouseout", volverEstiloParrafo);
}

function cambiarEstiloParrafo(event) {
  event.target.style.color = "green"; 
  event.target.style.backgroundColor = "yellow"; 
}

function volverEstiloParrafo(event) {
  event.target.style.color = ""; 
  event.target.style.backgroundColor = "";}
