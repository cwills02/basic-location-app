import React, { useState, useEffect } from 'react';
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
        <h1>Location Weather App</h1>
        {
          weatherData &&
        <ul>
            <h2>{weatherData.region}</h2>
            <h3>{weatherData.currentConditions.dayhour}</h3>
            <h3>{weatherData.currentConditions.temp.f} degrees F</h3>
            <h4>{weatherData.currentConditions.precip}</h4>
            <h4>{weatherData.currentConditions.humidity}</h4>
            <h4>{weatherData.currentConditions.wind.mile} per hour</h4>
            <img src={weatherData.currentConditions.iconURL} alt='weather thumbnail' />
        </ul>
        }
      </div>
    );
}

export default App;
