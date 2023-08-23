import React, { useState } from "react";
import "./App.css";

import Background from "./Background";
import SearchEngine from "./SearchEngine";
import City from "./City";
import DailyForecast from "./DailyForecast";
import WeeklyForecast from "./WeeklyForecast";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export default function App() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div className="app">
      <Background />
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <City weatherData={weatherData} />
          </div>
          <div className="col-md-7 text-right">
            <SearchEngine setWeatherData={setWeatherData} />
            <DailyForecast weatherData={weatherData} />
            <WeeklyForecast />
          </div>
        </div>
        <footer>
          <a
            href="https://github.com/KayleeMoonstone/my-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source
          </a>{" "}
          code by Kabelo Molebalwa
        </footer>
      </div>
    </div>
  );
}
