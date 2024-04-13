import React from "react";
import "./homePage.css";
import banner from "../assests/images/image 131stpage.png";
import nextbtn from "../assests/images/Group 1next-btn.png";

const HomePageOne = () => {
  return (
    <div>
      <div style={{ marginTop: "44px" }}>
        <a href="/signup" style={{ color: "#9FB2FF" }} className="skip-label">
          skip
        </a>
      </div>
      <div className="div-img-banner">
        <div style={{ marginTop: "120px" }}>
          <img src={banner} alt="running" className="banner-img1" />
        </div>
        <div>
          <h1 className="text-banner">Track Your Goal</h1>
          <p className="para-banner">
            Don’t worry if you have trouble determining your goals, We can help
            you determine your goals and track your goals
          </p>
        </div>
        <div className="div-next-btn">
          <a href="/homepagetwo">
            <img src={nextbtn} alt="next-btn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePageOne;
