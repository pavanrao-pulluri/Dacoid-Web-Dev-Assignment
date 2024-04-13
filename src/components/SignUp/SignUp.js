import React, { useState } from "react";
import "./signUp.css";
import "../../assests/css/common.css";
import facebooklogo from "../../assests/images/facebook.png";
import googlelogo from "../../assests/images/search.png";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreeTerms: false,
  });
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  return (
    <div style={{ marginTop: "70px" }}>
      <form onSubmit={handleSubmit}>
        <h2 className="signup-text">Create an Account</h2>
        <div
          className="div-lables"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            className="firstName common-background"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="lastName common-background"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            className="email common-background"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            className="password common-background"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ width: "100%", marginTop: "45px" }}>
          <label className="terms-label">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              required
            />
            By proceeding, I agree to all{" "}
            <a href="" style={{ color: "#93A9FF" }}>
              T&C
            </a>{" "}
            and{" "}
            <a href="" style={{ color: "#93A9FF" }}>
              Privacy Policy
            </a>
          </label>
        </div>
        <div style={{ marginTop: "70px" }}>
          <button type="submit" className="btn-common">
            Create an Account
          </button>
        </div>
      </form>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
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
      </div>
      <div style={{ marginTop: "30px" }}>
        <div>
          <span style={{ color: "#7F7F7F", fontSize: "12px" }}>Or</span>
        </div>
        <div style={{ marginTop: "25px" }}>
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
            Already have an account?{" "}
            <a style={{ color: "#819CFF" }} href="/login">
              Login
            </a>
          </h2>
        </footer>
      </div>
    </div>
  );
};

export default SignUp;
