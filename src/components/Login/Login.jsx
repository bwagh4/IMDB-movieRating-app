import React from "react";
import { Link } from "react-router-dom";
import { coverbg } from "./cover";

const Login = () => {
  const bg = {
    backgroundImage: `url(${coverbg})`,
  };
  return (
    <div
      className="w-100 min-vh-100 bgi-size-cover bgi-position-center py-40"
      style={bg}
    >
      <div className="card card-custom card-blur col-sm-6 col-md-4 col-lg-3 mx-auto mt-40 p-7">
        <form className="form-signin">
          <h1 className="h3 my-3 font-weight-normal text-center text-white">
            Please sign in
          </h1>
          <p className="font-size-sm text-center text-white">We are happy to see you again!</p>
          <div className="form-group">
            <label for="inputEmail" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control card-blur"
              placeholder="Email address"
              required
              autofocus
            />
          </div>
          <div className="form-group">
            <label for="inputPassword" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control card-blur"
              placeholder="Password"
              required
            />
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
          
         <Link to="/register" className="btn-link btn">Register now!</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
