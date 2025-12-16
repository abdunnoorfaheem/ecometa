import { createSlice } from '@reduxjs/toolkit'

export const addToCartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    addtocart: (state,action) => {
      
      // state.value += 1
    console.log(state.value);
    console.log(action.payload);
    
    },
   
  },
})


export const { addtocart } = addToCartSlice.actions

export default addToCartSlice.reducer