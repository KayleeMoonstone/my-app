import React from "react";
import "./Background.css";
import blueskyclouds from "./media/blueskyclouds.mp4";

export default function Background() {
  return (
    <div className="Background">
      <video id="background-video" autoPlay={true} loop muted>
        <source src={blueskyclouds} type="video/mp4" />
      </video>
    </div>
  );
}
