import { combineReducers } from "redux";
import dataSlice from "../slices/dataSlice";
import uiSlice from "../slices/uiSlice";

export const ROOT_REDUCER = combineReducers({
  pokemons: dataSlice,
  ui: uiSlice
})