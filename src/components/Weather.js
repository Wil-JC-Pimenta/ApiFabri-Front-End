import React from 'react';
import styled from 'styled-components';

const WeatherContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const Data = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const Advice = styled.p`
  font-size: 1rem;
  color: #666;
  font-style: italic;
`;

const Weather = ({ data }) => {
  return (
    <WeatherContainer>
      <Title>Dados do Clima</Title>
      <Data>{data}</Data>
      <Advice>👗 Para hoje, dependendo da temperatura, sugerimos: Se está ameno, use algo confortável como uma camiseta de manga longa ou uma blusa. Lembre-se de sempre conferir a previsão de chuva e levar um guarda-chuva se necessário! ☂️</Advice>
    </WeatherContainer>
  );
};

export default Weather;
