import questions from './data/questions';
import FlashCard from './components/FlashCard';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <h1>Flashcards React</h1>
      <div className="card-grid">
        {questions.map((q, i) => (
          <FlashCard key={i} question={q.question} answer={q.answer} />
        ))}
      </div>
    </div>
  );
}

export default App;
