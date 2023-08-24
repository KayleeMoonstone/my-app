import React, { useEffect } from "react";
import axios from "axios";
import "./WeeklyForecast.css";

export default function WeeklyForecast({ weatherData }) {
  useEffect(() => {
    if (weatherData) {
      const longitude = weatherData.coordinates.lon;
      const latitude = weatherData.coordinates.lat;
      const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=97c2f6a3b34509ac62090edc5d18d949&units=metric`;

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
            <div>
              <div>
                <img src={weatherData.weatherIcon} alt="Weather Icon" />
              </div>
            </div>
            <span>Sun</span>
          </strong>{" "}
          <br />
          <span className="maxTemp">25°</span> |{" "}
          <span className="minTemp">11°</span>{" "}
        </div>
        <div className="col">
          <strong>
            <div>☀️</div>
            <span>Mon</span>
          </strong>{" "}
          <br />
          <span className="maxTemp">24°</span> |{" "}
          <span className="minTemp">11°</span>{" "}
        </div>
        <div className="col">
          <strong>
            <div>🌤️</div>
            <span>Tue</span>
          </strong>{" "}
          <br />
          <span className="maxTemp">24°</span> |{" "}
          <span className="minTemp">10°</span>{" "}
        </div>
        <div className="col">
          <strong>
            <div>☀️</div>
            <span>Wed</span>
          </strong>{" "}
          <br />
          <span className="maxTemp">25°</span> |{" "}
          <span className="minTemp">12°</span>{" "}
        </div>
      </div>
    </div>
  );
}
