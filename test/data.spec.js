import { get } from '../src/data.js';

const SERVER = 'https://rickandmortyapi.com/api/character/';

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
});

/*describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
