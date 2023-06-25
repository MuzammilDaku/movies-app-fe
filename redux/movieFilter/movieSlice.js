import { createSlice } from "@reduxjs/toolkit";
export const movieSlice = createSlice({
    name:'Filter/Search Bar Of Movies',
    initialState:{
        searchQuery:'',
        filteredMovies:[],
        AllMovies:[]
    },
    reducers:{
        setAllMovies:(state,action)=>{
          state.AllMovies=action.payload
        },
         setSearchQuery:(state,action)=>{
            state.searchQuery = action.payload
         },
         filterMovies:(state,action)=>{
            const {searchQuery} = state
            const filteredMovies = state.AllMovies.filter((movie)=>{
                return movie.title.toLowerCase().includes(searchQuery.toLowerCase())
            })
            state.filteredMovies = filteredMovies
         }
    }
})
export const {setSearchQuery,filterMovies,setAllMovies}= movieSlice.actions
export default movieSlice.reducer