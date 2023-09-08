import { combineReducers } from "redux";
import { pokemonsReducer } from "./pokemons";
import { uiReducer } from "./ui";

export const ROOT_REDUCER = combineReducers({
  pokemons: pokemonsReducer,
  ui: uiReducer
})