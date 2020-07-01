//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
//import data from './data/rickandmorty/rickandmorty.js';

fetch('data/rickandmorty/rickandmorty.json')
.then(response => response.json())
.then(data => {
    console.log(data);
});

var personajesObj;

const content = document.getElementById("content")
const get = (url = "https://rickandmortyapi.com/api/character/") => {

   fetch(url)
      .then(res => res.json())
      .then(res => {
         console.log(res);

         personajesObj = res.info;
         res.results.forEach(element => {
            personajes.pintar(element);
         });


      });


}
const personajes = {
   pintar: (personajesItem) => {

      let divElement = document.createElement("div");

      let imgElement = document.createElement("img");
      imgElement.src = personajesItem.image;

      let nameElement = document.createElement("h3");
      nameElement.innerHTML = personajesItem.name;

      let statusElement = document.createElement("p");
      statusElement.innerHTML = personajesItem.status;

      let speciesElement = document.createElement("p");
      speciesElement.innerHTML = personajesItem.species;

      divElement.appendChild(imgElement);
      divElement.appendChild(nameElement);
      divElement.appendChild(statusElement);
      divElement.appendChild(speciesElement);



      let optionsHtml = document.getElementById("container");
      optionsHtml.appendChild(divElement);



   },
   more: () => {
      if (personajesObj.next == "https://rickandmortyapi.com/api/character/?page=30") {
         document.getElementById("seeMore").disabled = true;
      }
      get(personajesObj.next);
   }
};
