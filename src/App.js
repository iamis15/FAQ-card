import React from "react";
import Illustration from "./images/illustration-woman-online-desktop.svg";
import Background from "./images/bg-pattern-desktop.svg";
import Box from "./images/illustration-box-desktop.svg";
import Question from "./Question";
import Questions from "./Questions";

export default function App() {
  return (
    <main className="card">
      <section className="illustration">
        <div className="img-overflow">
          <img className="hero" src={Illustration} alt="illustration-img" />
        </div>
        <div className="img-overflow2">
          <img className="background" src={Background} alt="background-img" />
        </div>
        <img className="box" src={Box} alt="box-img" />
      </section>

      <section className="faq">
        <h1>FAQ</h1>

        {Questions.map((question) => (
          <Question question={question.question} answer={question.answer} />
        ))}
      </section>
    </main>
  );
}
