import "./App.css";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Goals from "./components/Goals/Goals";
import HomePageOne from "./Pages/HomePageOne";
import HomePageTwo from "./Pages/HomePageTwo";
import WorkoutTracker from "./components/WorkoutTracker/WorkoutTracker";
import WorkoutSchedule from "./components/WorkoutSchedule/WorkoutSchedule";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePageOne />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/homepagetwo" element={<HomePageTwo />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/workouttracker" element={<WorkoutTracker />} />
        <Route path="/workoutschedule" element={<WorkoutSchedule />} />
      </Routes>
    </div>
  );
}

export default App;
