//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
//import data from './data/rickandmorty/rickandmorty.js';
/*card
<h1>ACCESS PORTAL CARD</h1> <span>&times;</span>
<h2>${data.results[i].name}</h2>
<p>Gender: ${data.results[i].gender}</p>
<p>Status: ${data.results[i].status}</p>
<p>Specie: ${data.results[i].species}</p>
<p>Origin Planet: ${data.results[i].origin.name}</p>
*/
fetch('data/rickandmorty/rickandmorty.json')
.then(response => response.json())
.then(data => {
  let d = " ";

  data.results.forEach((item, i) => {
    d += `<div class="card">
          <img src="${data.results[i].image}" alt="Character Image">
          <h2>${data.results[i].name}</h2>
          </div>`
  });
    container.innerHTML = d;
    for (var i = 0; i < cardOpen.length; i++) {
      cardOpen[i].addEventListener('click', ()=> console.log('rayos'))
    }
});

const container = document.getElementById('container');
const cardOpen = document.getElementsByClassName('card');
console.log(cardOpen);
