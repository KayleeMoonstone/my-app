import React from "react";
import "./WeeklyForecast.css";

export default function WeeklyForecast() {
  return (
    <ul className="weeklyforecast">
      <li>
        <strong>
          <span>🌤️</span>
          <span>Sunday</span>
        </strong>{" "}
        <br />
        <span className="maxTemp">25</span> |{" "}
        <span className="minTemp">11</span> °C
      </li>
      <li>
        <strong>
          <span>☀️</span>
          <span>Monday</span>
        </strong>{" "}
        <br />
        <span className="maxTemp">24</span> |{" "}
        <span className="minTemp">11</span> °C
      </li>
      <li>
        <strong>
          <span>🌤️</span>
          <span>Tueday</span>
        </strong>{" "}
        <br />
        <span className="maxTemp">24</span> |{" "}
        <span className="minTemp">10</span> °C
      </li>
      <li>
        <strong>
          <span>☀️</span>
          <span>Wednesday</span>
        </strong>{" "}
        <br />
        <span className="maxTemp">25</span> |{" "}
        <span className="minTemp">12</span> °C
      </li>
      <li>
        <strong>
          <span>☀️</span>
          <span>Thursday</span>
        </strong>{" "}
        <br />
        <span className="maxTemp">24</span> | <span className="minTemp">8</span>{" "}
        °C
      </li>
    </ul>
  );
}
