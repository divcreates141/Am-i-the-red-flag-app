export default function ProgressBar({ progress, completedCount, totalQuestions }) {
  return (
    <div className="card glass">
      <div className="progress-head">
        <div>
          <h2>Behaviour Check</h2>
          <p>Choose the option that fits most often.</p>
        </div>
        <div className="progress-box">
          <div className="progress-label">Progress</div>
          <div className="progress-value">{progress}%</div>
          <div className="progress-sub">
            {completedCount}/{totalQuestions}
          </div>
        </div>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}