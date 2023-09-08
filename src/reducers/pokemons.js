import { TOGGLE_FAVORITE, SET_POKEMONS } from "../actions/types"

const initialState = {
  pokemons: [],
}

const actions = {
  [SET_POKEMONS]: (state, payload) => {
    return {
      ...state,
      pokemons: payload
    }
  },
  [TOGGLE_FAVORITE]: (state, payload) => {
    const index = state.pokemons.findIndex(pokemon => pokemon.id === payload)
    const pokemons = [...state.pokemons]
    
    if (index === -1) {
      return state
    }
    pokemons[index]['favorite'] = !pokemons[index]['favorite']

    return {
      ...state,
      pokemons: [...pokemons]
    }
  }
}
export const pokemonsReducer = (state = initialState, action) => {
  if (actions[action.type]) {
    return actions[action.type](state, action.payload)
  }
  return state
}