import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchEngine({ setWeatherData }) {
  const [cityName, setCityName] = useState("");

  const apiKey = "3bc520cc14bbdedfd7e45158f2ef0439";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(apiUrl);

      if (response.status === 200) {
        console.log(response.data);
        const weatherData = {
          cityName: response.data.name,
          weatherDescription: response.data.weather[0].description,
          weatherIcon: response.data.weather[0].icon,
          weatherIconAlt: response.data.weather[0].main,
          minTemperature: Math.round(response.data.main.temp_min),
          maxTemperature: Math.round(response.data.main.temp_max),
          windSpeed: Math.round(response.data.wind.speed),
          humidity: Math.round(response.data.main.humidity),
          cloudCover: Math.round(response.data.clouds.all),
          rainFall: Math.round(
            response.data.rain ? response.data.rain["1h"] : 0
          ),
          coordinates: response.data.coord,
        };
        setWeatherData(weatherData);
      } else {
        throw new Error("Weather data not found");
      }
    } catch (error) {
      console.log("Error fetching weather data", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
    setCityName("");
  };

  return (
    <div className="Searchbar">
      <form onSubmit={handleSubmit} id="searchBar">
        <input
          id="search"
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          autoComplete="off"
          placeholder="Search City"
        />
        <button type="submit" id="searchButton">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass-location" />
        </button>
      </form>
    </div>
  );
}
