import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [loaded, setLoaded] = useState(false);

  function showWeather(response) {
    setLoaded(true);

    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `0cd6606c8a21838ee3d658a5afde4449`;
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city..." onChange={updateCity} />
      <input type="submit" />
    </form>
  );

  if (loaded) {
    return (
      <div className="App">
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°F </li>
          <li>Description: {weather.description} </li>
          <li>Humidity: {weather.humidity}% </li>
          <li>Wind: {Math.round(weather.wind)} mph </li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
