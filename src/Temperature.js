import React from "react";

export default function Temperature() {
  let weatherData = {
    temperature: "80",
    description: "Sunny",
    humidity: "50",
    wind: "5",
  };

  return (
    <div className="Temperature">
      <div className="clearfix current-temp">
        <span>
          <img
            src="https://openweathermap.org/img/wn/02d@2x.png"
            alt="Clear"
            className="float-left"
          />
        </span>
        <span className="big-temp">{weatherData.temperature}</span>
        <span className="unit">°F</span>
      </div>
      <div className="weather-info">
        <div className="description">{weatherData.description}</div>
        <div className="humidity">Humidity: {weatherData.humidity}%</div>
        <div className="wind">Wind: {weatherData.wind}m/h</div>
      </div>
    </div>
  );
}
