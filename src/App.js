import React from "react";
import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <h1>React Weather App</h1>
      <WeatherSearch />
      <footer>
        Open sourced on{" "}
        <a
          href="https://github.com/jlynzhang/react-weather"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
      </footer>
    </div>
  );
}

export default App;
