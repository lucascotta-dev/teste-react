import { useState, useEffect } from 'react';
import questionsData from './data/questions';
import FlashCard from './components/FlashCard';
import './index.css';

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const shuffled = shuffleArray(questionsData);
    setQuestions(shuffled);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, questions.length - 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleCorrect = () => {
    setScore((prev) => prev + 1);
    handleNext();
  };

  const handleIncorrect = () => {
    handleNext();
  };

  if (questions.length === 0) return <p>Carregando perguntas...</p>;

  return (
    <div className="app-container">
      <h1>Flashcards de React</h1>
      <p>Pontuação: {score} / {questions.length}</p>

      <div className="card-grid">
        <FlashCard
          question={questions[currentIndex].question}
          answer={questions[currentIndex].answer}
        />
      </div>

      <div className="buttons">
        <button onClick={handlePrev} disabled={currentIndex === 0}>Anterior</button>
        <button onClick={handleNext} disabled={currentIndex === questions.length - 1}>Próximo</button>
      </div>

      <div className="quiz-buttons">
        <button onClick={handleCorrect}>Acertou ✅</button>
        <button onClick={handleIncorrect}>Errou ❌</button>
      </div>
    </div>
  );
}

export default App;
