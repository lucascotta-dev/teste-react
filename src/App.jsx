import React, { useEffect, useState } from 'react';
import Flashcard from './components/FlashCard';
import './App.css';

const App = () => {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    // Fetch flashcards from API ou de um arquivo local
    fetch('http://localhost:5000/api/flashcards')
      .then(response => response.json())
      .then(data => setFlashcards(data));
  }, []);

  return (
    <div className="app">
      <h1>Flashcards</h1>
      <div className="flashcards-container">
        {flashcards.map((flashcard) => (
          <Flashcard key={flashcard.id} question={flashcard.question} answer={flashcard.answer} />
        ))}
      </div>
    </div>
  );
};

export default App;

