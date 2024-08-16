import React from 'react';

const Card = ({ nomLibro, autorLib }) => {
    return (
      <div className="card">
        <h2 className="card-title">{nomLibro}</h2>
        <p className="card-author">{autorLib}</p>
      </div>
    );
  };
  
  export default Card;