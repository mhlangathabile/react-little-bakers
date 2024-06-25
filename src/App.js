import "./App.css";
import HomePage from "./HomePage";
import { BroswerRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Content">
          <Switch>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
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
    </Router>
  );
}

export default App;
