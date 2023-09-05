import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WeeklyForecast.css";
import WeeklyForecastDay from "./WeeklyForecastDay";

export default function WeeklyForecast({ weatherData }) {
  const [forecast, setForecast] = useState(null);

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
    setForecast(response.data.daily);
  }

  function handleError(error) {
    console.log(error);
  }
  return (
    <div className="weeklyforecast">
      <div className="row">
        <div className="col">
          <WeeklyForecastDay data={forecast[0]} />
        </div>
      </div>
    </div>
  );
}
