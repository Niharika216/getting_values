import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import ForgotPassword from "./ForgotPassword";
import SignUp from "./SignUp";

function Login() {
  return (
    <div className="App">
      <form>
        <div>
          <h2>Login</h2>
        </div>
        <div>
          <label>Username/Email</label>
          <input></input>
        </div>
        <div>
          <label>Password</label>
          <input></input>
        </div>
        <div>
          <Link to="/ForgotPassword">
            <p>Forgotten Password?</p>
          </Link>
        </div>
        <div>
          <Link to="/Dashboard">
            <button>Login</button>
          </Link>
        </div>
        <div>
          <p>
            if don't have account{" "}
            <Link to="SignUp">
              <p>signUp</p>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
