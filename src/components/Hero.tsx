import HeroMap from './HeroMap';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-split">
          <div className="fade-up">
            <h1>A tiny home you can legally call yours, anywhere in Europe.</h1>
            <p>
              Obelisk reads the regulation, builds your compliant pathway report, and connects you
              with a vetted builder. Skip the six-month research phase.
            </p>
            <div className="hero-actions">
              <a href="#diagnostic" className="btn btn-main">Check my pathway, free</a>
              <a href="#how-it-works" className="btn btn-ghost">How it works</a>
            </div>
          </div>
          <div className="hero-map-wrap fade-up" aria-hidden="true">
            <HeroMap />
          </div>
        </div>
      </div>
      <div className="ticker small-caps">
        Belgium &nbsp;&middot;&nbsp; France &nbsp;&middot;&nbsp; Netherlands &nbsp;&middot;&nbsp; Germany &nbsp;&middot;&nbsp; Portugal
      </div>
    </section>
  );
}
