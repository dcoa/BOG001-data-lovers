import fetch from "node-fetch";

export const get = async  (url = 'https://rickandmortyapi.com/api/character/') => {
   let data = await fetch(url)
   let personajes = await data.json()
   return personajes;
};

/*export const  filter = async (url) => {
  let episodes = await fetch (url) 
  let episodios = await episodes.json()
  return episodios;
};*/

 