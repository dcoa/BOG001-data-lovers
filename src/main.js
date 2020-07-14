import data from './data.js';


const btnSeeMore = document.getElementById("seeMore");
btnSeeMore.addEventListener("click", more)

const evento = document.getElementById("closeModal");
evento.addEventListener("click", closeModal);

var everyone = [];
var currentpage = 1;
var everyoneTemp = []
cargarPersonajes();


async function get(url) {
   try {
      let data = await fetch(url)
      return await data.json()
   } catch (error) {
      console.log(`error con el servicio ${url}`)
   }
}


function callPintar() {
   let everyonePage = everyone.filter(chara => chara.id >= currentpage && chara.id <= currentpage + 20)
   currentpage = currentpage + 20
   everyonePage = data.sortByDimension(everyonePage, "name", "ascendente")
   everyoneTemp = everyonePage
   everyonePage.forEach(element => {
      personajes.pintar(element);
   })
}

async function more() {
   callPintar()
   if (currentpage >= everyone.length) {
      document.getElementById("seeMore").disabled = true;
   }
}



async function cargarPersonajes(url = "https://rickandmortyapi.com/api/character/") {
   let dataResult
   while (url != null) {
      dataResult = await get(url)
      everyone = everyone.concat(dataResult.results);
      url = dataResult.info.next;
   }
   callPintar()
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
   debugger
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

function loadFilter(event) {
   let optionsHtml = document.getElementById("container");
   optionsHtml.innerHTML = ""
   let filterChapters = data.filterCharacters(event.target.value, everyone)
   everyoneTemp = filterChapters
   filterChapters.forEach((character) => {
      personajes.pintar(character)
   })
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
   debugger
   let episode = document.createElement("option");
   episode.innerHTML = allepisode.episode + " : " + allepisode.name;
   episode.value = allepisode.url;
   btnfilter.appendChild(episode);
}

obtenerCapitulos();

const btnsort = document.getElementById("Sort");
btnsort.addEventListener("change", orderByDimention);

function orderByDimention(event) {
   let tempdata = data.sortByDimension(everyoneTemp, "name", event.target.value)
   let optionsHtml = document.getElementById("container");
   optionsHtml.innerHTML = ""
   tempdata.forEach(element => {
      personajes.pintar(element);
   })
}
