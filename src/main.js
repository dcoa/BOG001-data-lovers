import data  from './data.js';

/*const { default: fetch } = require("node-fetch");*/

//import  {cargarJson} datafrom './data/rickandmorty/rickandmorty.json'
const btnSeeMore = document.getElementById("seeMore");
btnSeeMore.addEventListener("click", more)

const evento = document.getElementById("closeModal");
evento.addEventListener("click", closeModal);

var personajesObj = {};
var everyone = [];
cargarPersonajes();

async function get(url) {
   try {
      let data = await fetch(url)
      return await data.json()
   } catch (error) {
      console.log(`error con el servicio ${url}`)
   }
}


async function more() {
   if (personajesObj.next == "https://rickandmortyapi.com/api/character/?page=30") {
      document.getElementById("seeMore").disabled = true;
   }
   await cargarPersonajes(personajesObj.next);
}

async function cargarPersonajes(url = "https://rickandmortyapi.com/api/character/") {
   let dataResult = await get(url)
   personajesObj = dataResult.info;
   everyone = everyone.concat(dataResult.results);
   debugger
   everyone = data.sortByDimension(everyone, "species", "ascendente") 
   everyone.forEach(element => {
      personajes.pintar(element);

   })
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

   let imgElement = document.createElement("img");
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

const btnfilter = document.getElementById("filter");
btnfilter.addEventListener("change", loadFilter)

let charactersByEpisode = []

async function loadFilter(event) {
   charactersByEpisode = []
   let optionsHtml = document.getElementById("container");
   optionsHtml.innerHTML = ""
   document.getElementById("seeMore").style.display = "none";
   debugger
   let personajesUrls = data.filertEpisode(event.target.value, allepisodes)
   let characters = personajesUrls.characters
   let count = 0
   everyone = []
   while (count < characters.length) {
      let data = await get(characters[count])
      everyone.push(data)
      personajes.pintar(data);
      count++
   }

}


let allepisodes = [];
async function obtenerCapitulos() {
   let url = "https://rickandmortyapi.com/api/episode/"
   while (url != null) {
      let data = await get(url)
      url = data.info.next
      allepisodes = allepisodes.concat(data.results)
   }
   allepisodes.forEach(element => {
      mostrarEpisodios(element);
   });
}


function mostrarEpisodios(allepisode) {
   let episode = document.createElement("option");
   episode.innerHTML = allepisode.episode + " : " + allepisode.name;
   episode.value = allepisode.id;
   btnfilter.appendChild(episode);
}

obtenerCapitulos();

const btnsort = document.getElementById("Sort");
btnsort.addEventListener("change",orderByDimention);

async function orderByDimention(event) {
   everyone = data.sortByDimension(everyone,"species", event.target.value)
   let optionsHtml = document.getElementById("container");
   optionsHtml.innerHTML = ""
   debugger
   everyone.forEach(element => {
   personajes.pintar(element);  
   
    
})
}

