import React, { useEffect } from "react";
import axios from "axios";
import "./WeeklyForecast.css";

export default function WeeklyForecast({ weatherData }) {
  useEffect(() => {
    if (weatherData) {
      const longitude = weatherData.coordinates.lon;
      const latitude = weatherData.coordinates.lat;
      const apiKey = "3bc520cc14bbdedfd7e45158f2ef0439";
      const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then(handleResponse).catch(handleError);
    }
  }, [weatherData]);

  function handleResponse(response) {
    console.log(response.data);
  }

  function handleError(error) {
    console.log(error);
  }
  return (
    <div className="weeklyforecast">
      <div className="row">
        <div className="col">
          <strong>
            <div className="forecastIcon"></div>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weatherIcon}@2x.png`}
              alt={weatherData.weatherIconAlt}
            />
            <span>Sun</span>
          </strong>{" "}
          <br />
          <span className="maxTemp">25°</span> |{" "}
          <span className="minTemp">11°</span>{" "}
        </div>
      </div>
    </div>
  );
}
