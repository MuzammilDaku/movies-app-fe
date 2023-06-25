import { configureStore } from '@reduxjs/toolkit'
import movieReducer from'./movieFilter/movieSlice'

export const store = configureStore({
  reducer: {
    searchFilter:movieReducer
  },
})