// src/Weather.js
import React from 'react';

function Weather({ data }) {
  return (
    <div>
      <h2>Dados do Clima</h2>
      <p>{data}</p>
    </div>
  );
}

export default Weather;
