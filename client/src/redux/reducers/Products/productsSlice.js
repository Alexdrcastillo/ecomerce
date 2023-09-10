import { createSlice } from '@reduxjs/toolkit'

 export const initialState = {
    products: []
}

export const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
   setProduct: (state, action) => {
    state.products = action.payload
   }
  },
})

// Action creators are generated for each case reducer function
export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
