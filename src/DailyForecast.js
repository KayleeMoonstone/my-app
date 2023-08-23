import React from "react";
import "./DailyForecast.css";

export default function DailyForecast({ weatherData }) {
  if (!weatherData) {
    return <div>No weather data available</div>;
  }

  return (
    <div className="dailyForecast">
      <div className="row">
        <div className="col">
          <span className="title">Wind:</span> &nbsp;
          <span className="value">{weatherData.windSpeed} m/s</span>
        </div>
        <div>
          <span className="title">Humidity:</span> &nbsp;
          <span className="value">{weatherData.humidity} %</span>
        </div>
        <div>
          <span className="title">Cloud Cover:</span> &nbsp;
          <span className="value">{weatherData.cloudCover} %</span>
        </div>
        <div>
          <span className="title">Rainfall:</span> &nbsp;
          <span className="value">{weatherData.rainFall} %</span>
        </div>
      </div>
    </div>
  );
}
