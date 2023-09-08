import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toggleLoading } from "./uiSlice"
import { getPokemon, getPokemons } from "../api/getPokemons"

const initialState = {
  pokemons: [],
}

export const fetchPokemonWithDetails = createAsyncThunk('data/fetchPokemonWithDetails', async(_, thunAPI) => {
  thunAPI.dispatch(toggleLoading(true))
  const resp = await getPokemons()
  const composedResp = await Promise.all(resp.map(async (pokemon) => {
    const resp = await getPokemon(pokemon.url)
    return {
      name: pokemon.name,
      id: crypto.randomUUID(),
      favorite: false,
      ...resp
    }
  }))
  thunAPI.dispatch(setPokemons(composedResp))
  thunAPI.dispatch(toggleLoading(false))
})

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload
    },
    toggleFavorite: (state, action) => {
      const index = state.pokemons.findIndex(pokemon => pokemon.id === action.payload)
      if (index >= 0) {
        state.pokemons[index]['favorite'] = !state.pokemons[index]['favorite']
      }
    }
  }
})

export const { setPokemons, toggleFavorite } = dataSlice.actions
export default dataSlice.reducer