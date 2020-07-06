/*import { example } from './data.js';*/

//import cargarPersonajes from './data.js';  

var personajesObj = {};
var everyone = [];
function cargar() {
   cargarPersonajes()
}

function more() {
   if (personajesObj.next == "https://rickandmortyapi.com/api/character/?page=30") {
      document.getElementById("seeMore").disabled = true;
   }

   cargarPersonajes(personajesObj.next);
}

function cargarPersonajes(url = "https://rickandmortyapi.com/api/character/") {
   fetch(url)
      .then(res => res.json())
      .then(res => {
         personajesObj = res.info;
         everyone = everyone.concat(res.results)
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
      imgElement.id = personajesItem.id;
      imgElement.addEventListener("click", loadModal)

      divElement.appendChild(imgElement);

      let optionsHtml = document.getElementById("container");
      optionsHtml.appendChild(divElement);
   },


};

function loadModal(event) {
   
   let id = event.target.id;
   let character = everyone.find(ch => ch.id == Number(id));
   var modal = document.getElementById("myModal");
   modal.style.display = "block";
   document.getElementById("header").innerHTML = "PORTAL ACCESS CARD";
   let bodyModal = document.getElementById("bodyModal");

   bodyModal.innerHTML = "";

   let imgElement = document.createElement("img")
   imgElement.src = character.image;

   let nameElement = document.createElement("h3");
   nameElement.innerHTML = character.name;

   let speciesElement = document.createElement("p");
   speciesElement.innerHTML = character.species;

   let statusElement = document.createElement("p");
   statusElement.innerHTML = character.status;

   let NameOrigin = document.createElement("p")
   NameOrigin.innerHTML = character.origin.name;
   
   bodyModal.appendChild(imgElement);
   bodyModal.appendChild(nameElement);
   bodyModal.appendChild(speciesElement);
   bodyModal.appendChild(statusElement);
   bodyModal.appendChild(NameOrigin);


}
function closeModal() {
   var modal = document.getElementById("myModal");
   modal.style.display = "none";
}



const content = document.getElementById("content");
const btn = document.getElementById("seeCharacters");
btn.addEventListener("click", cargar)

const btnSeeMore = document.getElementById("seeMore");
btnSeeMore.addEventListener("click", more)


const evento = document.getElementById("closeModal");
evento.addEventListener("click", closeModal);


