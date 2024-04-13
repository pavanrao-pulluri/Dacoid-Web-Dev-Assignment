import React from "react";
import "../../assests/css/common.css";
import "./goals.css";
import { Link } from "react-router-dom";

const Goals = () => {
  return (
    <div>
      <div style={{ marginTop: "58px" }}>
        <span className="goals-text">What are your goals?</span>
      </div>
      <div className="container">
        <div className="lable-text common-background">
          Weight Loss
          <input
            type="checkbox"
            name="goal"
            value="weight-loss"
            className="label-check"
          />
        </div>
        <div className="lable-text common-background">
          Muscle Gain
          <input
            className="label-check"
            type="checkbox"
            name="goal"
            value="muscle-gain"
          />
        </div>
        <div className="lable-text common-background">
          Flexibility and Mobility
          <input
            className="label-check"
            type="checkbox"
            name="goal"
            value="flexibility-mobility"
          />
        </div>
        <div className="lable-text common-background">
          General Fitness
          <input
            className="label-check"
            type="checkbox"
            name="goal"
            value="general-fitness"
          />
        </div>
        <div className="lable-text common-background">
          Event-Specific Training
          <input
            className="label-check"
            type="checkbox"
            name="goal"
            value="event-specific-training"
          />
        </div>
        <div className="lable-text common-background">
          Mindfulness and Mental Health
          <input
            className="label-check"
            type="checkbox"
            name="goal"
            value="mindfulness-mental-health"
          />
        </div>
      </div>
      <div className="btn-div">
        <Link to={"/workouttracker"}>
          <button type="submit" className="btn-common">
            Confirm
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Goals;
