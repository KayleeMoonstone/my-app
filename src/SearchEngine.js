import React, { useState } from "react";
import "./SearchEngine.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchEngine({ setWeatherData }) {
  const [cityName, setCityName] = useState("");

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=97c2f6a3b34509ac62090edc5d18d949&units=metric`
      );
      if (response.ok) {
        const data = await response.json();
        const weatherData = {
          cityName: data.name,
          weatherDescription: data.weather[0].description,
          weatherIcon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          minTemperature: Math.round(data.main.temp_min),
          maxTemperature: Math.round(data.main.temp_max),
          windSpeed: Math.round(data.wind.speed),
          humidity: Math.round(data.main.humidity),
          cloudCover: Math.round(data.clouds.all),
          rainFall: Math.round(data.rain ? data.rain["3h"] : 0),
        };
        setWeatherData(weatherData);
      } else {
        throw new Error("weather data not found");
      }
    } catch (error) {
      console.log("Error fetching weather data:");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className="Searchbar">
      <form onSubmit={handleSubmit} id="searchBar">
        <button type="submit" id="searchButton">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass-location" />
        </button>
        <input
          id="search"
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          autoComplete="off"
          placeholder="Search City"
        />
        <button type="submit" id="homeButton">
          <FontAwesomeIcon icon="fa-solid fa-house" />
        </button>
      </form>
    </div>
  );
}
