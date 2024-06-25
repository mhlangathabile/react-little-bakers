import "./App.css";
import { BroswerRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>React Bakery</h1>
      <footer>
        This project was coded by Thabile P Mhlanga and is{" "}
        <a
          href="https://github.com/mhlangathabile/react-weather-forecast"
          target="_blank"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
