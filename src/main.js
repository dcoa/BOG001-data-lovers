/*import { example } from './data.js';*/
 
//import  {cargarJson} datafrom './data/rickandmorty/rickandmorty.json'

var personajesObj = {};

function cargar(){
    cargarPersonajes()
}

function more(){
    if (personajesObj.next == "https://rickandmortyapi.com/api/character/?page=30") {
        document.getElementById("seeMore").disabled = true;
     }
      cargarPersonajes(personajesObj.next);
 }

function cargarPersonajes(url = "https://rickandmortyapi.com/api/character/"){
    fetch(url)
        .then(res => res.json())
        .then(res => {
           personajesObj = res.info;
           res.results.forEach(element => {
              personajes.pintar(element);
           });
        });
}

const personajes = {
    pintar: (personajesItem) => {

       let divElement = document.createElement("div");

       let imgElement = document.createElement("img")
       imgElement.src = personajesItem.image;
       imgElement.addEventListener("click", loadModal)


       let nameElement = document.createElement("h3");
       nameElement.innerHTML = personajesItem.name;

       let speciesElement = document.createElement("p");
       speciesElement.innerHTML = personajesItem.species;

       let statusElement = document.createElement("p");
       statusElement.innerHTML = personajesItem.status;

       let NameOrigin = document.createElement("p")
       NameOrigin.innerHTML = personajesItem.origin.name;


       divElement.appendChild(imgElement);
       divElement.appendChild(nameElement);
       divElement.appendChild(statusElement);
       divElement.appendChild(speciesElement);
       divElement.appendChild(NameOrigin);

       let optionsHtml = document.getElementById("container");
       optionsHtml.appendChild(divElement);
     },


 };

 function loadModal(){
   var modal = document.getElementById("myModal");
    modal.style.display = "block";
 }
 function closeModal(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
 }



const content = document.getElementById("content")
const btn = document.getElementById("seeCharacters");
btn.addEventListener("click",cargar)

const btnSeeMore = document.getElementById("seeMore");
btnSeeMore.addEventListener("click", more)


const evento = document.getElementById("closeModal")
evento.addEventListener("click",closeModal)
