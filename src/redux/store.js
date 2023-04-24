import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "../features/basketSlices" // lo podemos importar con cualquier nombre

export const store = configureStore({
  reducer: {
    basket: basketReducer, // le ponemos cualquier nombre pero ponemos la importacion
  },
})