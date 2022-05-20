import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async () => {
    const movieText = "venom";
    const response = await movieApi
      .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`);
      /*.catch((err) => {
          console.log("Err :", err);
      });*/
    return response.data;
});


export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsyncShows',
  async () => {
    const seriesText = "The big bang theory";
    const response = await movieApi
      .get(`?apiKey=${APIKey}&s=${seriesText}&type=series`);
      /*.catch((err) => {
          console.log("Err :", err);
      });*/
    return response.data;
});


export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  'movies/fetchAsyncMovieOrShowDetail',
  async (id) => {
    const response = await movieApi
      .get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
});



const initialState = {
    movies:{},
    shows:{},
    slectMovieOrShow:{},
  };

const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies: (state, { payload }) => {
            state.movies = payload;
        }
    },
    extraReducers: {
      [fetchAsyncMovies.pending]: () => {
        console.log("Pending");
      },
      [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
        console.log("Fetched Successfully!");
        return {...state, movies: payload };
      },
      [fetchAsyncMovies.rejected]: () => {
        console.log("Rejected!");
        return {...state, movies: payload };
      },
      [fetchAsyncShows.fulfilled]: (state, {payload}) => {
        console.log("Fetched Successfully!");
        return {...state, shows: payload };
      },
      [fetchAsyncMovieOrShowDetail.fulfilled]: (state, {payload}) => {
        console.log("Fetched Successfully!");
        return {...state, slectMovieOrShow: payload };
      },
    }
  });

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectMovieOrShow = (state) => state.movies.slectMovieOrShow;
export default movieSlice.reducer;