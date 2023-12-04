import { useEffect, useState } from "react";
import "./error-page-style.css";

export default function ErrorPage() {
  const [fact, setFact] = useState("");

  useEffect(() => {
    async function getFact() {
      const requestURL =
        "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en";
      const response = await fetch(requestURL);
      const data = await response.json();
      return data;
    }

    getFact().then((data) => setFact(data.text));
  }, []);

  return (
    <section className="error-page">
      <div className="text">
        <h1>Oops!</h1>
        <h2>We can&apos;t find what you&apos;re looking for.</h2>
        <h2>
          <span className="orange-text">But</span>, we can find a{" "}
          <span className="blue-text">random fact</span> for you!
        </h2>
      </div>
      <div className="error-fact">
        <p className="orange-text">Did you know?</p>
        <p>{fact}</p>
      </div>
    </section>
  );
}
