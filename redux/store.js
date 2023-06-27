import { configureStore } from '@reduxjs/toolkit'
import movieFilterSliceReducer from './movieFilter/movieFilterSlice'
export const store = configureStore({
  reducer: {
    movieFilter:movieFilterSliceReducer
  },
})