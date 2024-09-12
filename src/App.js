import React, { useState } from 'react';
import axios from 'axios';
import Weather from './Weather';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/weather?city=${city}`);
      setWeatherData(response.data);
      setError('');
    } catch (err) {
      setError('Erro ao buscar dados do clima.');
      setWeatherData(null);
    }
  };

  const handleSearch = () => {
    fetchWeather();
  };

  return (
    <div className="App">
      <h1>Clima</h1>
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Digite o nome da cidade" 
      />
      <button onClick={handleSearch}>Buscar</button>
      {error && <p>{error}</p>}
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default App;
