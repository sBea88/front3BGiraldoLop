import React, { useState } from 'react';
import Form from './Components/Form';
import Card from './Components/Card';
import './App.css';

const App = () => {
  const [cardData, setCardData] = useState(null);
  const [error, setError] = useState('');

  return (
    <div className="App">
      <h1>Bienvenida a Ágora, tu bibliote privada a un clic</h1>
      <Form setCardData={setCardData} setError={setError} />
      {error && <p className="error">{error}</p>}
      {cardData && <Card nomLibro={cardData.nomLibro} autorLib={cardData.autorLib} />}
    </div>
  );
};

export default App;

