const filertEpisode =  (episode, listEpisode) => {
  let filtered = listEpisode.find(epi => epi.id == episode)
  return filtered;
}

export default filertEpisode;