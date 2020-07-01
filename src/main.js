//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

fetch('data/rickandmorty/rickandmorty.json')
.then(response => response.json())
.then(data =>{
  console.log(data);
});

fetch('https://rickandmortyapi.com/api/episode').then((response)=>{
  return response.json();
}).then((episode)=>{
  console.log(episode);
});




//  console.log(data);
