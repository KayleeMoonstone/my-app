import React from "react";
import "./WeeklyForecast.css";

export default function WeeklyForecast() {
  return (
    <div className="weeklyforecast">
      <div className="row">
        <div className="col">
          <strong>
            <div>🌤️</div>
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
