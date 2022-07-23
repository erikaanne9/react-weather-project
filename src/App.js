import React from "react";
import Search from "./Search";
import Heading from "./Heading";
import Forecast from "./Forecast";

import "./App.css";

function App() {
  return (
    <div className="weather-app">
      <Search />
      <Heading />
      <Forecast />
    </div>
  );
}

export default App;
