import React from "react";
import Temperature from "./Temperature";

export default function Heading() {
  let weatherData = {
    city: "New York",
    date: "Thursday 10:00am",
  };

  return (
    <div className="Heading">
      <h1 className="weather-heading">{weatherData.city} Weather Conditions</h1>
      <p className="date-time">{weatherData.date} </p>
      <Temperature />
    </div>
  );
}
