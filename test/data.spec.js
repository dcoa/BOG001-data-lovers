import  allfunction from '../src/data.js';
import data from "../src/data/rickandmorty/rickandmorty.js"

/*const SERVER = 'https://rickandmortyapi.com/api/character/';

describe('API REST', () => {
  it('GET /character debe devolver todos los personajes', async () => {

    const res = await get(SERVER);

    expect(typeof res).toBe('object');
    expect(typeof res.info).toBe('object');
    expect(typeof res.results).toBe('object');

    for (let character of res.results) {
      expect(typeof character.image).toBe('string');
      expect(typeof character.name).toBe('string');
      expect(typeof character.species).toBe('string');
      expect(typeof character.status).toBe('string');
      expect(typeof character.origin.name).toBe('string');

    }

  });
});*/

describe('allfunction.filterepisode', () => {
  it('is a function', () => {
    expect(typeof allfunction.filterepisode).toBe('function');
  });

  it('deberia retornar un object para el episodio 30', () => {
    expect(typeof allfunction.filterepisode(data.results, "30")).toBe('object');
  });

  it('deberia retornar Blim Blam para el episodio 14', () => {
    expect(allfunction.filterepisode(data.results, "14")[6].name).toBe('Blim Blam');
  });

  it('deberia retornar 13 perdonajes para el episodio 4', () => {
    expect(allfunction.filterepisode(data.results, "4")).toHaveLength(13);
  });

});


/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
