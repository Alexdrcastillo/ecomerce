import { configureStore } from '@reduxjs/toolkit'
import productReducer from './reducers/Products/productsSlice'

export const store = configureStore({
  reducer: {
     product: productReducer
     },
})

