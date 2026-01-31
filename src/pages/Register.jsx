import React from "react";
import "./Register.css";
import {Link} from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="form-container">
        <h1 className="form-title">REGISTER</h1>
        <form>
          <div className="form-group">
            <lable htmlFor="name">Full Name</lable>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
            />
          </div>
          {/*email field*/}
          <div className="form-group">
            <lable htmlFor="email">Email Address</lable>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>

          {/*phone Number Field*/}
          <div className="form-group">
            <lable htmlFor="phone">phone Number</lable>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="create a password"
            />
          </div>
          {/* password Filed*/}
          <div className="form-group">
            <lable htmlFor="password">password</lable>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="create a password"
            />
          </div>
          {/*submit button*/}
          <button type="submit" className="btn-primary">
            Register
          </button>
        </form>
        <p className="link-text">
          Already have an Account? <Link to="/login">Login Here</Link>
        </p>
      </div>
    </>
  );
};

export default Register;
