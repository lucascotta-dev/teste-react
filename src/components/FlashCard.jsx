import React, { useState } from 'react';
import './components/flashcard.css';

const Flashcard = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={toggleFlip}>
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <h2>{question}</h2>
        </div>
        <div className="flashcard-back">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
