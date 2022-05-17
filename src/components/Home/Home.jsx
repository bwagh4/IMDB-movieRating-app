
import { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";

import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";

const Home = () => {
let movieArr = [ 'Harry', 'Time', 'Batman', 'city', 'lord', 'man',  'Home',  'London',  'Thor',  'Night'];
let seriesArr = [ 'Friends', 'Detective', 'Dark', 'city', 'lord', 'office',  'Sherlock',  'Game',  'Boys',  'Money'];
const number = Math.floor(Math.random() * 10);

const dispatch =useDispatch()
const movieText = movieArr[number]
const showText = seriesArr[number]
useEffect(()=>{
  dispatch(fetchAsyncMovies(movieText))
  dispatch(fetchAsyncShows(showText))

},[dispatch])




  return (
    <div className="bg-dark" style={{minHeight:"100vh"}}>
      <div>Banner</div>
      <MovieListing />
    </div>
  );
};

export default Home;
