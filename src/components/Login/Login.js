import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import "../../assests/css/common.css";
import facebooklogo from "../../assests/images/facebook.png";
import googlelogo from "../../assests/images/search.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ marginTop: "70px" }}>
      <form onSubmit="">
        <h2 className="signup-text">Welcome Back</h2>
        <div
          className="div-lables"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            type="email"
            className="email common-background"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            className="password common-background"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginTop: "320px" }}>
          <Link to={"/goals"}>
            <button type="submit" className="btn-common">
              Sign In
            </button>
          </Link>
        </div>
      </form>
      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          marginTop: "20px",
        }}
      > */}
      {/* <div
          style={{
            height: "1px",
            width: "160px",
            backgroundColor: "#000",
            marginRight: "10px",
            marginLeft: "36%",
            background: "#7F7F7F",
          }}
        ></div>
        <span style={{ color: "#7F7F7F", fontSize: "12px" }}>Or</span>
        <div
          style={{
            height: "1px",
            width: "160px",
            backgroundColor: "#000",
            marginLeft: "10px",
            background: "#7F7F7F",
          }}
        ></div> */}
      {/* </div> */}

      <div style={{ marginTop: "50px" }}>
        <div style={{ marginBottom: "20px" }}>
          <span style={{ color: "#7F7F7F", fontSize: "12px" }}>Or</span>
        </div>
        <a href="">
          <img
            src={facebooklogo}
            alt="facebook"
            width="25px"
            height="25px"
            style={{ marginRight: "10px" }}
          />
        </a>
        <a href="">
          <img src={googlelogo} alt="google" width="25px" height="25px" />
        </a>
      </div>
      <footer>
        <h2 className="footer-lable">
          Don’t have an account yet?
          <Link to={"/signup"} style={{ color: "#819CFF" }}>
            Create an account
          </Link>
        </h2>
      </footer>
    </div>
  );
};

export default Login;
