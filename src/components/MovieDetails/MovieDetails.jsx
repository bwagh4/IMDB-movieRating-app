import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAsyncMovieORShowsDetails, getSeletedMovieOrShow, removeSeletedMovieOrShow } from "../../features/movies/movieSlice";

const MovieDetails = () => {

const{imdbID} = useParams()
const dispatch = useDispatch()
const data = useSelector(getSeletedMovieOrShow)
useEffect(()=>{
dispatch(fetchAsyncMovieORShowsDetails(imdbID))
return()=>{
  dispatch(removeSeletedMovieOrShow())
}
},[dispatch, imdbID])
  return (
    <div className="d-flex my-md-10 mx-md-10">
  {Object.keys(data).length === 0 ? (<div type="button" className="w-100px spinner spinner-dark spinner-right mx-auto mt-30">Loading</div>):(
    <>
    

    <div
      className="position-absolute h-100 w-100 top-0 left-0 zindex-n1 bgi-no-repeat bgi-size-cover"
style={{ backgroundImage: `url(${data.Poster})`, filter: "blur(8px)" }}
    ></div>
    <div className="p-2 w-100 text-light" style={{textShadow: "0 0 2px rgb(0 0 0 / 50%)"}}>
      <h1>
        {data.Title} <small className="font-size-lg">( {data.Language})</small>
      </h1>
      <h5 className="text-success text-shadow">
        Rated - ⚡{data.Rated} | IMDB Rating - ⭐ {data.imdbRating} | IMDB Votes - 👍{data.imdbVotes}
      </h5>
      <h5 className=" text-shadow">
      Box office collectino  -{data.BoxOffice}
      </h5>


      <p className="h5"> {data.Genre}</p>
      <p className="font-size-lg">
        <strong>Year </strong>- {data.Year} | Released - {data.Released}
      </p>
      <p className="font-size-lg">
        <strong>Writer</strong> - {data.Writer}
      </p>
      <p className="font-size-lg">
        <strong>Actors </strong>- {data.Actors}
      </p>
      <p className="font-size-lg">
        <strong>Plot</strong> - {data.Plot}
      </p>
      <p className="font-size-lg">
        <strong>Country</strong> - {data.Country}
      </p>
      <p className="font-size-lg">
        <strong>Awards</strong> - {data.Awards}
      </p>
    </div>
    <div className="p-2 col-md-6 flex-shrink-1">
      <div className="card ">
        <div className="card-body">
          <img src={data.Poster} className="img-fluid w-100" alt={data.Type} />
        </div>
      </div>
    </div>
    </>
  ) }
  
 

    </div>
  );
};

export default MovieDetails;
