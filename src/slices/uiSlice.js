import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  loading: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleLoading: (state, action) => {
      return {
        ...state,
        loading: action.payload
      }
    },
  }
})

export const { toggleLoading } = uiSlice.actions
export default uiSlice.reducer