import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    // const movieText = "harry";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    // const seriesText = "friends";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncMovieORShowsDetails = createAsyncThunk(
  "movies/fetchAsyncMovieORShowsDetails",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  seletedMoviesOrShows: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSeletedMovieOrShow:(state)=>{
        state.removeSeletedMovieOrShow={}
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
    
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
     
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
     
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
   
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieORShowsDetails.fulfilled]: (state, { payload }) => {
     
      return { ...state, seletedMoviesOrShows: payload };
    },
  },
});

export const { removeSeletedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSeletedMovieOrShow = (state) => state.movies.seletedMoviesOrShows;
export default movieSlice.reducer;
