import { useState } from 'react';
import './FlashCard.css';

function FlashCard({ question, answer }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className="card-content">
        {flipped ? <p>{answer}</p> : <p>{question}</p>}
      </div>
    </div>
  );
}

export default FlashCard;
