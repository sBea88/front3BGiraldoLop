import React, { useState } from 'react';

const Form = ({ setCardData, setError }) => {
  const [formData, setFormData] = useState({ nomLibro: '', autorLib: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nomLibro, autorLib } = formData;
    
    if (nomLibro.trim().length < 3 || autorLib.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      setCardData(null);
    } else {
      setError('');
      setCardData(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nomLibro">Título de la obra:</label>
        <input
          type="text"
          id="nomLibro"
          name="nomLibro"
          value={formData.nomLibro}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="autorLib">Autor:</label>
        <input
          type="text"
          id="autorLib"
          name="autorLib"
          value={formData.autorLib}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Agregar</button>
      {<button type="reset">Buscar</button>}
    </form>
  );
};

export default Form;
