import { SWITCH_LOADING } from "../actions/types"

const initialState = {
  loading: false
}

const actions = {
  [SWITCH_LOADING]: (state, payload) => {
    return {
      ...state,
      loading: payload
    }
  },
}

export const uiReducer = (state = initialState, action) => {
  if (actions[action.type]) {
    return actions[action.type](state, action.payload)
  }
  return state
}