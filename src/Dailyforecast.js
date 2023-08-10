import React from "react";
import "./Dailyforecast.css";

export default function Dailyforecast() {
  return (
    <div className="Dailyforecast">
      <h2>
        <span>☁</span> <span id="maxTemp">24</span> |
        <span id="minTemp">13</span>
        <button type="submit" id="degreeButton">
          °C
        </button>
      </h2>

      <ul className="nav nav-tabs" id="myTabs" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link"
            id="wind-tab"
            data-toggle="tab"
            href="#wind"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            <span>💨</span> Wind
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="humidity-tab"
            data-toggle="tab"
            href="#humidity"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            <span>💧</span> Humidity
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="cloudCover-tab"
            data-toggle="tab"
            href="#cloudCover"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            <span>☁️</span> Cloud Cover
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="rainfall-tab"
            data-toggle="tab"
            href="#rainfall"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            <span>🌧️</span> Rainfall
          </a>
        </li>
      </ul>
    </div>
  );
}
