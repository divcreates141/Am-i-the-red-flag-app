export default function ResultsPanel({
  result,
  scores,
  categoryDescriptions,
  onReview,
  onReset,
}) {
  return (
    <div className="results-wrap">
      <div className="card glass">
        <div className="results-head">
          <div>
            <div className="eyebrow light">Your result</div>
            <h2 className="results-title">
              {result.emoji} {result.title}
            </h2>
            <p className="results-summary">{result.summary}</p>
            <p className="results-tone">{result.tone}</p>
          </div>

          <div className="score-box">
            <div className="score-label">Weighted score</div>
            <div className="score-value">{scores.weightedTotal}</div>
            <div className="score-sub">out of ~70</div>
          </div>
        </div>
      </div>

      <div className="results-grid">
        <div className="card glass">
          <h3>Biggest growth area</h3>
          <div className="highlight-box">
            <div className="highlight-title">{scores.strongestCategory || "None"}</div>
            <p>
              {scores.strongestCategory
                ? categoryDescriptions[scores.strongestCategory]
                : "Complete the quiz to see your strongest category."}
            </p>
          </div>

          <h3 className="section-space">Category breakdown</h3>
          <div className="breakdown-list">
            {scores.sortedCategories.map(([category, value]) => {
              const percentage = Math.min(100, (value / 12) * 100);

              return (
                <div key={category}>
                  <div className="breakdown-row">
                    <span>{category}</span>
                    <strong>{value.toFixed(1)}</strong>
                  </div>
                  <div className="progress-track slim">
                    <div className="progress-fill" style={{ width: `${percentage}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="card dark">
          <h3>Keep this grounded</h3>
          <p>This is not a label. It reflects patterns, not your identity.</p>
          <p>Patterns can change with awareness, accountability, and effort.</p>
          <p>The goal is not to panic. The goal is to notice what keeps showing up.</p>

          <div className="dark-note">
            <strong>Cute but serious reminder</strong>
            <p>
              Healthy relationships are less about never messing up and more about
              repair, respect, and consistency.
            </p>
          </div>

          <div className="btn-row">
            <button className="light-btn" onClick={onReview}>
              Review answers
            </button>
            <button className="ghost-btn" onClick={onReset}>
              Start over
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}