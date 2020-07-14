const data = {

  sortByDimension: (data, sortBy, sortOrder) => {
  let dataOrganizada = data.sort((a, b) => a.location.name > b.location.name ? 1 : -1);
  if(sortOrder === 'descendente'){
    dataOrganizada = dataOrganizada.reverse()
    }
    return dataOrganizada;

  },

  filterCharacters: (character, listCharacters) => {
    let filtered = listCharacters.filter(epi => epi.episode.some(e => e == character))
    return filtered;
  }
}
export default data;








const allfunction = {
filterepisode : (data, filterby) => {
 let filtered = [];
   data.filter(character => {
    character.episode.forEach(ep => {
      let num = ep.substring(40);
      if(num  === filterby){
        filtered.push(character);
    }
  });
})
  return filtered;
},
}
export default allfunction
