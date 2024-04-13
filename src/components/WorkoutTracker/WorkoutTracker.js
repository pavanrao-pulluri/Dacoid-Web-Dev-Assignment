import React from "react";
import "./workoutTracker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import home from "../../assests/images/Group 5menu.png";
import chart from "../../assests/images/Chart Fullchart.png";
import minibanner from "../../assests/images/Frame 17mini-banner.png";
import fullbody from "../../assests/images/Ellipse 53full-body.png";
import upperbody from "../../assests/images/Ellipse 54upperbody.png";
import Switch from "@mui/material/Switch";
const WorkoutTracker = () => {
  const label = { inputProps: { "aria-label": "Color switch demo" } };
  return (
    <div style={{ marginTop: "50px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="back-btn" />
        <h1 className="tracker-text">Workout Tracker</h1>
      </div>
      <div style={{ marginTop: "40px" }}>
        <label style={{ marginLeft: "70px" }}>Good job</label>
        <label style={{ marginLeft: "20px" }}>Less then 320 al</label>
        <div style={{ display: "block", marginTop: "20px" }}>
          <img src={chart} alt="chart" style={{ marginTop: "10px" }} />
          <img
            src={minibanner}
            alt="minibanner"
            style={{ marginTop: "20px" }}
          />
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <h1 className="event-text">Upcoming Workout</h1>

          <label className="event-text-label">see more</label>
        </div>
        <div className="workout-reminders">
          <img src={fullbody} alt="full body" />
          <div style={{ marginLeft: "10px" }}>
            <h2 className="workout-reminder-text">Full Body Workout</h2>
            <p className="workout-reminder-text-label">Today 3pm</p>
          </div>
          <div style={{ marginLeft: "30px" }}>
            <Switch {...label} defaultChecked />
          </div>
        </div>
        <div className="workout-reminders">
          <img src={upperbody} alt="full body" />
          <div style={{ marginLeft: "10px" }}>
            <h2 className="workout-reminder-text">Upper Body Workout</h2>
            <p className="workout-reminder-text-label">21 April, 3:30 pm</p>
          </div>
          <div style={{ marginLeft: "30px" }}>
            <Switch {...label} defaultChecked />
          </div>
        </div>
      </div>
      <div>
        <h1 className="workout-more-text">What Do You Want to Train</h1>
        <div style={{}}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              marginLeft: "35px",
              fontWeight: 500,
              fontSize: "12px",
              fontFamily: "Montserrat",
              Width: "114px",
              marginTop: "20px",
            }}
          >
            <label>Full Body Workout</label>
            <label>Arms</label>
            <label>Chest</label>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <img src={home} alt="home" className="menu-banner" />
      </div>
    </div>
  );
};

export default WorkoutTracker;
