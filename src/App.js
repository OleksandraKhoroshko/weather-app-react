import "./styles.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Dnipro" />
        <footer>
          This project was coded by Oleksandra Khoroshko and is{" "}
          <a
            href="https://github.com/OleksandraKhoroshko/weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
