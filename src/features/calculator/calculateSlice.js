import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  number: 0
}

export const calculateSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setNumber: (state, action) => {
      state.number = action.payload
    }
  }
})

export const { setNumber } = calculateSlice.actions

export default calculateSlice.reducer