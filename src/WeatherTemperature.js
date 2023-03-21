import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  let fahrenheit = (props.celsius * 9) / 5 + 32;
  if (unit === "celsius") {
    return (
      <div>
        <span className="temperature">{Math.round(props.celsius)}</span>{" "}
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit} rel="noopener noreferrer">
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temperature">{Math.round(fahrenheit)}</span>{" "}
        <span className="unit">
          <a href="/" onClick={convertToCelsius} rel="noopener noreferrer">
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
