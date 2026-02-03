import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  //declaration

  const [Data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  //logic
  const handleInputChange = (e) => {
    //console.log(e.target.name,e.target.value)
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!Data.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Data.email)) {
      newErrors.email = "Invalid Email format.";
    }
    if (!Data.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (Data.password.length < 6) {
      newErrors.password = "Minimum 6 character required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {

      const storedUser = JSON.parse(localStorage.getItem("authData"));

      if (
        storedUser.email === Data.email &&
        storedUser.password === Data.password
      ) {
        //alert("Login Successfull");
        localStorage.setItem("Data", JSON.stringify(Data));
        navigate("/dashboard");
      } else {
        alert("Invalid email or password");
      }
    }
  };

  return (
    <>
      <div className="form-container">
        <h1 className="form-title">Welcome Back</h1>
        <form onSubmit={handleSubmit}>
          {/*email feild */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={Data.email}
              placeholder="Enter your email"
              onChange={handleInputChange}
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>
          {/*passwrod field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={Data.password}
              placeholder="Enter your password"
              onChange={handleInputChange}
            />
            {errors.password && (
              <span className="error-msg">{errors.password}</span>
            )}
          </div>
          {/*submit button */}
          <button type="submit" className="btn-primary">
            Login
          </button>
        </form>
        {/*link to register page */}
        <p className="link-text">
          Don't have an accout? <Link to="/register">Register Here</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
