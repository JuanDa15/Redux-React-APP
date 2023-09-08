import { getPokemon } from "../api/getPokemons";
import { TOGGLE_FAVORITE, SET_POKEMONS, SWITCH_LOADING } from "./types";

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload
})

export const switchLoading = (payload) => ({
  type: SWITCH_LOADING,
  payload
})

export const markAsFavorite = (payload) => ({
  type: TOGGLE_FAVORITE,
  payload
})

export const getPokemonsDetailed = (pokemons = []) => async (dispatch) => {
  dispatch(switchLoading(true))
  const composedResp = await Promise.all(pokemons.map(async (pokemon) => {
    const resp = await getPokemon(pokemon.url)
    return {
      name: pokemon.name,
      id: crypto.randomUUID(),
      favorite: false,
      ...resp
    }
  }))
  dispatch(setPokemons(composedResp))
  dispatch(switchLoading(false))
}