import React, { useState } from "react";
import logo from "../../assets/logo.png";
import animate from "../../assets/animate.gif";
import registerStyle from "./register.modules.css";
import { Link } from "react-router-dom";
import Login from "../login/Login";
export default function Register() {
  const [change, setChange] = useState(false);
  return (
    <>
      <div className="registerContainer">
        <div className="logoContainer">
          <div className="logoBox">
            <img src={logo} className="logo" />
            <span className="logoName">Chaty</span>
          </div>

          <img src={animate} className="animate" />
        </div>

        <div className="inputContainer">
          <span className="signTitle">Sign up</span>
          <form className="formGroup">
            <div className="inputBox">
              <span className="label">Name</span>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                required
                className="inputTag"
              />
            </div>
            <div className="genderAndMale">
              <div className="gender">
                <span className="label">Age</span>
                <input
                  type="number"
                  id="name"
                  placeholder="Enter Your Gender"
                  required
                  className="genderInput"
                />
              </div>
              <div className="male">
                <span className="label">Gender</span>
                <label className="genderSelect">
                  <select required className="select">
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="inputBox">
              <span className="label">Email</span>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Email"
                required
                className="inputTag"
              />
            </div>
            <div className="inputBox">
              <span className="label">Phone Number</span>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                required
                className="inputTag"
              />
            </div>
            <div className="inputBox">
              <span className="label">Password</span>
              <input
                type="password"
                id="name"
                placeholder="Enter Your Password"
                required
                className="inputTag"
              />
            </div>
            <button className="signBtn">Sign Up</button>
          </form>

          <div className="pageBox">
            <Link to="/login">
              <a className="login">Go to Login</a>
            </Link>
            <Link to="/home">
              <a className="home">Go to Home</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
