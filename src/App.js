import React, { useState } from 'react';
import Weather from './components/Weather';
import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
  background: #e0f7fa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 50px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background: #00796b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #004d40;
  }
`;

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState('Carregando dados...');

  const fetchWeather = async () => {
    try {
      const response = await fetch(`http://localhost:8080/weather?city=${city}`);
      const data = await response.text();
      setWeatherData(data);
    } catch (error) {
      setWeatherData('Erro ao buscar dados.');
    }
  };

  return (
    <AppContainer>
      <h1>Pesquise Informações sobre o clima da sua cidade</h1>
      <Input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Digite a cidade" 
      />
      <Button onClick={fetchWeather}>Buscar</Button>
      <Weather data={weatherData} />
    </AppContainer>
  );
}

export default App;
