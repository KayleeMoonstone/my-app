import React from "react";
import "./City.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function City({ weatherData }) {
  if (!weatherData) {
    return <div>Please search a city</div>;
  }

  const formattedDate = new Date().toLocaleString("en-UK", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedTime = new Date().toLocaleString("en-UK", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

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
          <span id="currentDate">{formattedDate}</span> &nbsp;
          <span id="currentTime">{formattedTime}</span>
        </strong>
        <br />
        <span id="weatherDescription">{weatherData.weatherDescription}</span>
      </p>
      <h2 id="currentTemp">
        <img src={weatherData.weatherIcon} alt="Weather Icon" />
        <span id="maxTemp">{weatherData.maxTemperature}</span> |
        <span id="minTemp">{weatherData.minTemperature}</span>
        <span id="degreeSign">°C</span>
      </h2>
    </div>
  );
}
