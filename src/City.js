import React from "react";
import "./City.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function City({ weatherData }) {
  if (!weatherData) {
    return <div>No weather data available</div>;
  }

  return (
    <div className="City">
      <h1 id="city">
        <span>
          <FontAwesomeIcon icon="fa-solid fa-location-dot" />
        </span>
        &nbsp; {weatherData.cityName}
      </h1>
      <p>
        <strong id="currentDateTime">
          <span id="currentDate">Saturday, 3 June 2023</span> &nbsp;
          <span id="currentTime">11:24</span>
        </strong>
        <br />
        <span id="weatherDescription">{weatherData.weatherDescription}</span>
      </p>
      <h2 id="currentTemp">
        <img src={weatherData.weatherIcon} alt="Weather Icon" />
        <span id="maxTemp">{weatherData.maxTemperature}</span> |
        <span id="minTemp">{weatherData.minTemperature}</span>
        <button type="submit" id="degreeButton">
          °C
        </button>
      </h2>
    </div>
  );
}
