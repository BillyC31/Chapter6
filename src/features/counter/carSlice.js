import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filteredCars:[],
}

export const carSlice = createSlice({
  name:'filter',
  initialState,
  reducers: {
    updateFilteredCars: (state,action) => {
      state.filteredCars = action.payload
    },
    
  }
})

// Action creators are generated for each case reducer function
export const {updateFilteredCars } = carSlice.actions

export default carSlice.reducer