import fetch from "node-fetch";

export const get = async (url = 'https://rickandmortyapi.com/api/character/') => {
  let data = await fetch(url)
  let personajes = await data.json()
  return personajes;
};

 