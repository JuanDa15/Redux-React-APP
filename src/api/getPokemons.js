import { GET } from "./methods/GET"

export const getPokemons = async () => {
  const { results = [] } = await GET('https://pokeapi.co/api/v2/pokemon?limit=151');
  return results
}

export const getPokemon = async (url) => {
  const { sprites: { front_default }, types} = await GET(url);
  const mapped = types.map(type => type.type.name);
  return {
    sprite: front_default, 
    types: mapped
  }
}