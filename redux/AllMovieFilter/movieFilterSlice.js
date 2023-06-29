import { createSlice } from "@reduxjs/toolkit";

export const movieFilterSlice = createSlice({
    name:'Filter Search Bar Of Movies-App',
    initialState:{
        allMovies:[],
        filteredMovies:[],
        searchQuery:''
    },
    reducers:{
        setAllMovies:(state,action)=>{
            state.allMovies=action.payload
            console.log('state all movies',state.allMovies)
        },
        setSearchQuery:(state,action)=>{
            state.searchQuery= action.payload
            console.log('state search',state.searchQuery)
        },
        filterMovies:(state,action)=>{
            const {searchQuery} = state // Getting Data of Search Query From State 
            const filteredMovies = state.allMovies.filter((movie)=>{
             return   movie.title.toLowerCase().includes(searchQuery.toLowerCase())
            })
            return { ...state, filteredMovies };

            
        }
        
    }
})
export const {setAllMovies,setSearchQuery,filterMovies} = movieFilterSlice.actions
export default movieFilterSlice.reducer