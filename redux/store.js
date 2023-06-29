import { configureStore } from '@reduxjs/toolkit'
import movieFilterSliceReducer from './AllMovieFilter/movieFilterSlice'
export const store = configureStore({
  reducer: {
    movieFilter:movieFilterSliceReducer
  },
})