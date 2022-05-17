import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt, BiMicrophone } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault();
    if(term === '') return alert("Please enter movie or series name")
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setTerm("");
  };

  return (
    <nav className="navbar navbar-expand-md bg-gray-800 navbar-dark">
      <div className="container">
        <Link to="/">
          <BiCameraMovie className="h2" />
          <strong className="navbar-brand">Movies</strong>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item position-relative">
              <Link to="/watch-list">
                <span className="nav-link ">
                  Watch List
                  {/* <span className="label position-absolute top-0"> {watchCount}</span> */}
                </span>
              </Link>
            </li>
          </ul>

          <div className="ml-auto mt-3">
            <form className="form-inline" onSubmit={submitHandler}>
              <div className="input-group mb-3 bg-gray-700 d-flex justify-content-between align-items-center px-3 ">
                <BiSearchAlt className="text-light h3 m-0" />
                <input
                  className="form-control bg-gray-700 text-light border-0"
                  type="search"
                  placeholder="Search Movies or Shows"
                  aria-label="Search"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                  autoComplete="true"
                />
                <BiMicrophone className="text-light h3 m-0 cursor-pointer" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
