import React from "react";
import "./homePage.css";
import banner2 from "../assests/images/image 162nd page .png";
import nextbtn from "../assests/images/Group 1next-btn.png";
import { Link } from "react-router-dom";

const HomePageTwo = () => {
  return (
    <div>
      <div style={{ marginTop: "44px" }}>
        <a href="/signup" style={{ color: "#9FB2FF" }} className="skip-label">
          skip
        </a>
      </div>
      <div className="div-img-banner">
        <div style={{ marginTop: "165px" }}>
          <img src={banner2} alt="cycling" className="banner-img" />
        </div>
        <div>
          <h1 className="text-banner">Get Burn</h1>
          <p className="para-banner">
            Let’s keep burning to achieve your goals, it hurts only temporarily,
            if you give up now you will be in pain forever
          </p>
        </div>
        <div className="div-next-btn">
          <Link to={"/signup"}>
            <img src={nextbtn} alt="next-btn" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePageTwo;
