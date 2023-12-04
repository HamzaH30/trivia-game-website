import "./welcome-page-style.css";

export default function WelcomePage() {
  return (
    <section className="welcome-page-description">
      <h1>Brain Battle Royale</h1>
      <p>
        Welcome to <span className="blue-text">Brain Battle Royale</span>, the
        ultimate trivia challenge that tests your knowledge and quick thinking!
      </p>
      <br />
      <p>
        Dive into a world of facts and fun, where players compete head-to-head
        to answer intriguing questions on a wide range of topics.
      </p>
      <br />
      <p>
        <span className="green-text">Sharpen your mind,</span>{" "}
        <span className="amber-text">outwit your opponents,</span>{" "}
        <span className="orange-text">
          and rise to the top in this thrilling battle of wits!
        </span>
      </p>
      <div className="play-btn-container">
        <button className="play-btn">Play Now</button>
      </div>
    </section>
  );
}
