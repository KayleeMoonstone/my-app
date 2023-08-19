import React from "react";
import "./City.css";

export default function City() {
  return (
    <div className="City">
      <h1 id="city">Pretoria</h1>
      <p>
        <strong id="currentDateTime">
          <span id="currentDate">Saturday, 3 June 2023</span> &nbsp;
          <span id="currentTime">11:24</span>
        </strong>
        <br />
        <span id="weatherDescription">Light Rain Showers</span>
      </p>
      <h2 id="currentTemp">
        <span>☁</span> <span id="maxTemp">24</span> |
        <span id="minTemp">13</span>
        <button type="submit" id="degreeButton">
          °C
        </button>
      </h2>
    </div>
  );
}
