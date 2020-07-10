/* import fetch from "node-fetch";

export const get = async (url) => {
   let data = await fetch(url)
   let personajes = await data.json()
   return personajes;
};*/

const allfunction = {
filterepisode : (data, filterby) => {
 let filtered = [];
   data.filter(data => {
    data.episode.forEach(ep => {
      let num = ep.substring(40);
      if(num  === filterby){
        filtered.push(data);
    }
  });
})
  return filtered;
},
}
export default allfunction
