import allfunction from './data.js';

const btnSeeMore = document.getElementById("seeMore");
btnSeeMore.addEventListener("click", more)

const evento = document.getElementById("closeModal");
evento.addEventListener("click", closeModal);

var personajesObj = {};
var everyone = [];
cargarPersonajes();

function more() {
}

function cargarPersonajes(url = "https://raw.githubusercontent.com/dcoa/BOG001-data-lovers/master/src/data/rickandmorty/rickandmorty.json") {
   fetch(url)
      .then(res => res.json())
      .then(res => {
         personajesObj = res.info;
         everyone = everyone.concat(res.results);
         res.results.forEach(element => {
            personajes.pintar(element);
         });
      });
}

const personajes = {
   pintar: (everyone) => {

      let divElement = document.createElement("div");

      let imgElement = document.createElement("img")
      imgElement.src = everyone.image;
      imgElement.id = everyone.id;
      imgElement.className = "select";
      imgElement.addEventListener("click", loadModal);

      let nameElement = document.createElement("h3");
      nameElement.innerHTML = everyone.name;
      nameElement.className = "selectname";

      divElement.appendChild(imgElement);
      divElement.appendChild(nameElement);

      let optionsHtml = document.getElementById("container");
      optionsHtml.appendChild(divElement);
   },
};


function loadModal(event) {

   let id = event.target.id;
   let character = everyone.find(ch => ch.id == Number(id));

   var modal = document.getElementById("myModal");
   modal.style.display = "flex";
   let img = document.getElementById("imgElement");
   let contentElement = document.getElementById("contentElement");

   img.innerHTML = "";
   contentElement.innerHTML = "";

   let imgElement = document.createElement("img")
   imgElement.src = character.image;

   let nameElement = document.createElement("h3");
   nameElement.innerHTML = character.name;

   let statusgender = document.createElement("div");

   let statusElement = document.createElement("p");
   statusElement.innerHTML = "Status: " + character.status;
   if (character.status === "Alive") {
     statusElement.style.color = "#20856B";
   } else if (character.status === "Dead") {
     statusElement.style.color = "#6E1F06";
   } else {
     statusElement.style.color = "#000000"
   }

   let genderElement = document.createElement("p");
   genderElement.innerHTML = "Genere: " + character.gender;


   let speciesElement = document.createElement("p");
   speciesElement.innerHTML = "Specie: " + character.species;
   let nameOrigin = document.createElement("p");
   nameOrigin.innerHTML = "Origin Planet: " + character.origin.name;

   statusgender.appendChild(statusElement);
   statusgender.appendChild(genderElement);
   img.appendChild(imgElement);
   contentElement.appendChild(nameElement);
   contentElement.appendChild(statusgender);
   contentElement.appendChild(speciesElement);
   contentElement.appendChild(nameOrigin);

}

function closeModal() {
   var modal = document.getElementById("myModal");
   modal.style.display = "none";
}

const episode = document.getElementById("filter");
episode.addEventListener("change", showfilterdata);

let allepisode;

fetch("data/rickandmorty/episode.json")
  .then(res => res.json())
  .then(res => {

    allepisode = res.results;

    allepisode.forEach(element => {
      mostrarEpisodios(element);
    });
  });


function mostrarEpisodios (allepisode) {
  let option = document.createElement("option");
   option.innerHTML = allepisode.episode + " : "+ allepisode.name;
   option.value = allepisode.id;
   episode.appendChild(option);
}

function showfilterdata(e){
  const epvalue = e.target.value;
  let ch = allfunction.filterepisode(everyone, epvalue);
   document.getElementById("seeMore").style.display = "none";
   document.getElementById("container").innerHTML = " ";

  ch.forEach(element => {
     personajes.pintar(element);})
}
