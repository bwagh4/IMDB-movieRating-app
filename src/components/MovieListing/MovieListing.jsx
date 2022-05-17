import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard"
import Slider from "react-slick/lib/slider";
import{settings} from './setting'

const MovieListing = () => {
const movies = useSelector(getAllMovies)
const shows = useSelector(getAllShows)
let renderMovies, renderShows = "";

renderMovies = movies.Response === "True" ? (
  movies.Search.map((movie, index)=>
  <MovieCard key={index} data={movie} />
  )
) : (<div className="h2 text-warning">Error to fetch api data </div>)
renderShows = movies.Response === "True" ? (
  shows.Search.map((movie, index)=>
  <MovieCard key={index} data={movie} />
  )
) : (<div className="h2 text-warning">Error to fetch api data </div>)
  return (
    <div className="container-fluid">
      <h2 className="px-5 text-light">Movies</h2>
        <div className="w-100">
        <Slider {...settings}>
         {renderMovies}</Slider>
        </div>

        <h2 className="px-5 text-light">Shows and Series</h2>
        <div className="w-100">
        <Slider {...settings}>
      {renderShows}
      </Slider>
        </div>
    
    </div>
  );
};

export default MovieListing;
