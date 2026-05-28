export default function StatStrip() {
  return (
    <div className="stat-strip">
      <div className="container">
        <div className="stat-strip-grid">
          <div className="stat-strip-item">
            <span className="stat-strip-number">5</span>
            <span className="stat-strip-label">countries covered</span>
          </div>
          <div className="stat-strip-divider" aria-hidden="true" />
          <div className="stat-strip-item">
            <span className="stat-strip-number">12+</span>
            <span className="stat-strip-label">legal pathways mapped</span>
          </div>
          <div className="stat-strip-divider" aria-hidden="true" />
          <div className="stat-strip-item">
            <span className="stat-strip-number">49</span>
            <span className="stat-strip-label">euros per year, post-build monitoring</span>
          </div>
        </div>
      </div>
    </div>
  );
}
