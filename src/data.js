const data = {
  sortByDimension: (data, sortBy, sortOrder) => {
    debugger
    if(sortOrder === 'ascendente'){
     return data.sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1);
    }
    if (sortOrder === 'descendente') {
      return data.sort((a, b) => a[sortBy] < b[sortBy] ? 1 : -1)
    }
  },
  filertEpisode: (episode, listEpisode) => {
    let filtered = listEpisode.find(epi => epi.id == episode)
    return filtered;
  }
}
export default data;







/*computeStats(data)*/