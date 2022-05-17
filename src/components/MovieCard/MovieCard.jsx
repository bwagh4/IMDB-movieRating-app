import React from "react";

import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const MovieCard = ({data}) => {
  return (
    <div className="overflow-hidden position-relative mx-3 mb-7">
      <span className="position-absolute right-0 top-0 p-3 zindex-2">
        <BsHeartFill className="h2 text-white text-hover-danger" />
      </span>
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card overflow-hidden">
          <div
            className="bgi-no-repeat bgi-size-cover position-absolute w-100 h-100"
            style={{
              backgroundImage: `url(${data.Poster})`,
              filter: "blur(5px)",
            }}
          ></div>
          <div className="card-body p-4 d-flex  zindex-1 position-relative">
            <img
              src={data.Poster}
              alt={data.Title}
              className="mx-auto"
              style={{ maxHeight: "386px", maxWidth: "300px" }}
            />
            <span className="badge badge-white position-absolute">
              {data.Type}
            </span>
          </div>
        </div>
        <div className="card-footer h-100px mt-n3 text-dark">
          <h6> {data.Title} </h6>
          <small>Year - {data.Year}</small>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
