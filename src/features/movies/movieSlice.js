import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async () => {
    const movieText = "fast";
    const response = await movieApi
      .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
      /*.catch((err) => {
          console.log("Err :", err);
      });*/
    return response.data;
})

const initialState = {
    movies: {},
  };

const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies: (state, { payload }) => {
            state.movies = payload;
        }
    },
  });

  export const { addMovies } = movieSlice.actions;
  export const getAllMovies = (state) => state.movies.movies;
  export default movieSlice.reducer;