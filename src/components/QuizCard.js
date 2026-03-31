export default function QuizCard({ question, answerLabels, value, onAnswer }) {
  return (
    <div className="card question-card">
      <div className="meta-row">
        <span className="meta">Q{question.id}</span>
        <span className="meta category">{question.category}</span>
        <span className="meta weight">Weight {question.weight.toFixed(1)}</span>
      </div>

      <p className="question-text">{question.prompt}</p>

      <div className="answer-grid">
        {answerLabels.map((option) => {
          const selected = Number(value) === option.value;

          return (
            <button
              key={option.value}
              className={`answer-btn ${selected ? "selected" : ""}`}
              onClick={() => onAnswer(question.id, option.value)}
            >
              <div className="answer-score">{option.value}</div>
              <div>{option.label}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}