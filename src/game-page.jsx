import "./game-page-style.css";

export default function GamePage() {
  return (
    <section className="game-page">
      <h1>Brain Battle Trivia</h1>
      <section className="num-questions-container">
        <h2>Number of Questions</h2>
        <input
          type="range"
          min="1"
          max="50"
          step="1"
          defaultValue="10"
          className="num-questions-slider"
        />
      </section>
      <section className="difficulty-container">
        {/* Any, Easy, Medium, Difficulty */}
      </section>
      <section className="category-container">{/*  */}</section>
    </section>
  );
}
