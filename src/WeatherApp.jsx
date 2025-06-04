import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';


function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;
    const apiKey = 'ba71b0b804732c1b46956ce6c6242652'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      alert("City not found!");
      setWeather(null);
    }
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="container">
      <div className="input-section">
        <input
          type="text"
          placeholder="CITY NAME"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>

      {weather && (
        <div className="weather-box">
          <h2>{weather.name.toUpperCase()}</h2>
          <h1>{weather.main.temp.toFixed(2)}°C</h1>
          <p><strong>Humidity</strong> {weather.main.humidity}%</p>
          <p><strong>Wind Speed</strong> {weather.wind.speed} km/hr</p>
          <p><strong>Sunrise</strong> {formatTime(weather.sys.sunrise)}</p>
          <p><strong>Sunset</strong> {formatTime(weather.sys.sunset)}</p>
          <p><strong>Pressure</strong> {weather.main.pressure} mBar</p>
          <p><strong>Cloud Cover</strong> {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
