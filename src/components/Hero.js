export default function Hero({ onStart }) {
  return (
    <div className="hero-grid">
      <div className="card glass">
        <div className="pill">Div Creates • Logic Lab</div>
        <h1>
          Am I the <span className="accent">Red Flag?</span>
        </h1>
        <p className="hero-text">
          A cute little behaviour-based self-check for accountability, not shame.
          This tool scores repeated patterns in communication, consistency,
          boundaries, and emotional behaviour.
        </p>
        <div className="tag-row">
          <span className="tag">No gendered stereotypes</span>
          <span className="tag">Pattern-based scoring</span>
          <span className="tag">Reflective, not dramatic</span>
        </div>
      </div>

      <div className="card dark">
        <div className="eyebrow">How it works</div>
        <p>Answer each item based on your repeated behaviour — not your best intentions.</p>
        <p>Scores range from 0 to 3, then get weighted based on relational impact.</p>
        <p>Your result highlights the strongest growth area, not your worth as a person.</p>

        <button className="primary-btn" onClick={onStart}>
          Let’s be honest 💅
        </button>
      </div>
    </div>
  );
}