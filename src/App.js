import React, { useState, useEffect } from 'react';
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
  const [city, setCity] = useState(''); // Estado para a cidade inserida
  const [weatherData, setWeatherData] = useState('Carregando dados...'); // Estado para os dados climáticos

  // Função para buscar o clima de uma cidade específica
  const fetchWeather = async (cidade) => {
    try {
      const response = await fetch(`http://localhost:8080/weather?city=${cidade}`);
      const data = await response.text();
      setWeatherData(data);
    } catch (error) {
      setWeatherData('Erro ao buscar dados.');
    }
  };

  // UseEffect para carregar os dados de Coronel Fabriciano ao abrir a página
  useEffect(() => {
    fetchWeather('Coronel Fabriciano');
  }, []); // O array vazio [] garante que o efeito rode apenas uma vez ao carregar

  return (
    <AppContainer>
      <h1>Pesquise Informações sobre o clima da sua cidade</h1>
      <Input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Digite a cidade" 
      />
      <Button onClick={() => fetchWeather(city)}>Buscar</Button> {/* Busca a cidade digitada */}
      <Weather data={weatherData} /> {/* Exibe os dados climáticos */}
    </AppContainer>
  );
}

export default App;
