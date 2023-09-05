import React from "react";

export default function WeeklyForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  return (
    <div>
      <strong>
        <div className="forecastIcon">
          <img
            src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
            alt={props.data.weather[0].main}
          />
        </div>
        <span>{day()}</span>
      </strong>{" "}
      <br />
      <span className="maxTemp">{maxTemperature()}°</span> |{" "}
      <span className="minTemp">{minTemperature()}°</span>{" "}
    </div>
  );
}
