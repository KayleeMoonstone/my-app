import React from "react";
import "./DailyForecast.css";

export default function DailyForecast() {
  return (
    <div className="dailyForecast">
      <div>
        <span className="title">Wind:</span> &nbsp;
        <span className="value">5 km/h</span>
      </div>
      <div>
        <span className="title">Humidity:</span> &nbsp;
        <span className="value">60 %</span>
      </div>
      <div>
        <span className="title">Cloud Cover:</span> &nbsp;
        <span className="value">10 %</span>
      </div>
      <div>
        <span className="title">Rainfall:</span> &nbsp;
        <span className="value">30 %</span>
      </div>
    </div>
  );
}
