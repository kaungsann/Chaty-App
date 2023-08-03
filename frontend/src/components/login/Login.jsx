import React from "react";
import loginCss from "./login.modules.css";
import logo from "../../assets/logo.png";
import animate from "../../assets/animate.gif";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <div className="registerContainer">
        <div>
          <div className="logoBox">
            <img src={logo} className="logo" />
            <span className="logoName">Chaty</span>
          </div>
          <div>
            <img src={animate} className="animate" />
          </div>
        </div>
        <div className="loginContainer">
          <span className="loginText">Sign In</span>
          <form className="formBox">
            <div className="inputBox">
              <span className="label">Email</span>
              <input
                type="email"
                placeholder="Enter Your Email"
                required
                className="inputTag"
              />
            </div>

            <div className="inputBox">
              <span className="label">Password</span>
              <input
                type="password"
                placeholder="Enter Your Password"
                required
                className="inputTag"
              />
            </div>
            <div className="forgetBox">
              <input type="checkbox" className="checkBox" />
              <span className="forget">Forget Password ?</span>
            </div>
            <button className="signBtn">Sign In</button>
          </form>
          <div className="pageBox">
            <Link to="/register">
              <a className="login">Go to Register</a>
            </Link>
            <Link to="/login">
              <a className="home">Go to Home</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
