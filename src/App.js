import { useMemo, useState } from "react";
import Hero from "./components/Hero";
import ProgressBar from "./components/ProgressBar";
import QuizCard from "./components/QuizCard";
import ResultsPanel from "./components/ResultsPanel";
import {
  questions,
  answerLabels,
  resultBands,
  categoryDescriptions,
} from "./data/questions";

export default function App() {
  const [answers, setAnswers] = useState({});
  const [started, setStarted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const totalQuestions = questions.length;
  const completedCount = Object.keys(answers).length;
  const progress = Math.round((completedCount / totalQuestions) * 100);

  const handleAnswer = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const scores = useMemo(() => {
    const categoryScores = {};
    let weightedTotal = 0;

    questions.forEach((q) => {
      const raw = Number(answers[q.id] ?? 0);
      const weighted = raw * q.weight;
      weightedTotal += weighted;

      if (!categoryScores[q.category]) {
        categoryScores[q.category] = 0;
      }

      categoryScores[q.category] += weighted;
    });

    const strongestCategory =
      Object.entries(categoryScores).sort((a, b) => b[1] - a[1])[0]?.[0] || null;

    const sortedCategories = Object.entries(categoryScores).sort(
      (a, b) => b[1] - a[1]
    );

    return {
      weightedTotal: Number(weightedTotal.toFixed(1)),
      categoryScores,
      strongestCategory,
      sortedCategories,
    };
  }, [answers]);

  const result = useMemo(() => {
    return resultBands.find(
      (band) =>
        scores.weightedTotal >= band.min && scores.weightedTotal <= band.max
    );
  }, [scores.weightedTotal]);

  const canSubmit = completedCount === totalQuestions;

  const resetQuiz = () => {
    setAnswers({});
    setStarted(false);
    setShowResults(false);
  };

  return (
    <div className="app-shell">
      <div className="container">
        {!started && !showResults && <Hero onStart={() => setStarted(true)} />}

        {!started && !showResults && (
          <div className="card glass intro-grid">
            <div className="mini-box">
              <h3>1. Thought Pattern Recognition </h3>
              <p>Answer based on what you repeatedly do, not one random Tuesday.</p>
            </div>
            <div className="mini-box">
              <h3>2. Be honest & brave</h3>
              <p>Self-awareness is hot. Denial is exhausting.</p>
            </div>
            <div className="mini-box">
              <h3>3. No shame spiral</h3>
              <p>This is a reflection tool, not a personality verdict.</p>
            </div>
          </div>
        )}

        {started && !showResults && (
          <div className="layout-grid">
            <div className="main-col">
              <ProgressBar
                progress={progress}
                completedCount={completedCount}
                totalQuestions={totalQuestions}
              />

              {questions.map((question) => (
                <QuizCard
                  key={question.id}
                  question={question}
                  answerLabels={answerLabels}
                  value={answers[question.id]}
                  onAnswer={handleAnswer}
                />
              ))}

              <div className="btn-row">
                <button
                  className={`submit-btn ${canSubmit ? "" : "disabled"}`}
                  onClick={() => setShowResults(true)}
                  disabled={!canSubmit}
                >
                  Reveal my result
                </button>

                <button className="secondary-btn" onClick={resetQuiz}>
                  Reset
                </button>
              </div>
            </div>

            <aside className="sidebar card dark">
              <h3>Category Guide</h3>
              {Object.entries(categoryDescriptions).map(([name, desc]) => (
                <div key={name} className="sidebar-box">
                  <strong>{name}</strong>
                  <p>{desc}</p>
                </div>
              ))}
            </aside>
          </div>
        )}

        {showResults && result && (
          <ResultsPanel
            result={result}
            scores={scores}
            categoryDescriptions={categoryDescriptions}
            onReview={() => {
              setShowResults(false);
              setStarted(true);
            }}
            onReset={resetQuiz}
          />
        )}
      </div>
    </div>
  );
}