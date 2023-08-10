import React from "react";
import "./Weeklyforecast.css";

export default function Weeklyforecast() {
  return (
    <div className="Weeklyforecast btn-group-vertical text-right">
      <button className="btn btn-primary btn-block" type="button">
        <strong>
          <span>🌤️</span> Sunday
        </strong>{" "}
        <br />
        25 | 11 °C
      </button>
      <button className="btn btn-primary btn-block" type="button">
        <strong>
          <span>☀️</span> Monday
        </strong>{" "}
        <br />
        24 | 11 °C
      </button>
      <button className="btn btn-primary" type="button">
        <strong>
          <span>🌤️</span> Tuesday
        </strong>{" "}
        <br />
        24 | 10 °C
      </button>
      <button className="btn btn-primary" type="button">
        <strong>
          <span>☀️</span> Wednesday
        </strong>{" "}
        <br />
        25 | 12 °C
      </button>
      <button className="btn btn-primary" type="button">
        <strong>
          <span>☀️</span> Thursday
        </strong>{" "}
        <br />
        24 | 8 °C
      </button>
    </div>
  );
}
