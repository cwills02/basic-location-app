import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState('');

  useEffect(() => {
    fetch('https://weatherdbi.herokuapp.com/data/weather/minnesota')
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);
      });
  }, [])

  return (
    <div className="App">
      <ul>
        {
          weatherData &&
          <h1>{weatherData.region}</h1>
        }
      </ul>
    </div>
  );
}

export default App;
