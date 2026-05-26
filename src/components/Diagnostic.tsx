import { useState } from 'react';
import { getPathway, type Country, type UseCase, type LandStatus } from '../data/pathways';

type Step = 1 | 2 | 3 | 'result';

interface DiagState {
  country: Country | null;
  use: UseCase | null;
  land: LandStatus | null;
}

export default function Diagnostic() {
  const [step, setStep] = useState<Step>(1);
  const [state, setState] = useState<DiagState>({ country: null, use: null, land: null });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function selectCountry(country: Country) {
    setState((s) => ({ ...s, country }));
    setStep(2);
  }

  function selectUse(use: UseCase) {
    setState((s) => ({ ...s, use }));
    setStep(3);
  }

  function selectLand(land: LandStatus) {
    setState((s) => ({ ...s, land }));
    setStep('result');
  }

  function reset() {
    setState({ country: null, use: null, land: null });
    setEmail('');
    setSubmitted(false);
    setStep(1);
  }

  function submitEmail() {
    if (email.trim()) {
      console.log('Email captured:', email);
      setSubmitted(true);
    }
  }

  const result =
    step === 'result' && state.country && state.use && state.land
      ? getPathway(state.country, state.use, state.land)
      : null;

  return (
    <section id="diagnostic" className="diagnostic">
      <div className="container fade-up">
        <h2>Tell us where. We tell you whether.</h2>
        <p>Free, no signup, three questions, instant pathway diagnostic.</p>

        <div className="diagnostic-widget">
          {step === 1 && (
            <div className="diag-animate">
              <div className="small-caps">Step 1 of 3</div>
              <h3>Where do you want to build?</h3>
              <div className="diag-options">
                {(['Belgium', 'France', 'Netherlands', 'Germany', 'Portugal'] as Country[]).map((c) => (
                  <div key={c} className="diag-card" onClick={() => selectCountry(c)}>
                    {c === 'Belgium' && '🇧🇪 '}
                    {c === 'France' && '🇫🇷 '}
                    {c === 'Netherlands' && '🇳🇱 '}
                    {c === 'Germany' && '🇩🇪 '}
                    {c === 'Portugal' && '🇵🇹 '}
                    {c}
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="diag-animate">
              <div className="small-caps">Step 2 of 3</div>
              <h3>What is the primary use?</h3>
              <div className="diag-options">
                {(['Permanent residence', 'Care/family unit', 'Holiday/tourism', 'Studio or office'] as UseCase[]).map((u) => (
                  <div key={u} className="diag-card" onClick={() => selectUse(u)}>
                    {u}
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="diag-animate">
              <div className="small-caps">Step 3 of 3</div>
              <h3>What land do you have?</h3>
              <div className="diag-options">
                {(['Urban land I own', 'Rural land I own', 'No land yet'] as LandStatus[]).map((l) => (
                  <div key={l} className="diag-card" onClick={() => selectLand(l)}>
                    {l}
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 'result' && result && (
            <div className="diag-animate">
              <div className="small-caps">Diagnostic Complete</div>
              <div className="result-box">
                <strong>{result.title}.</strong> {result.body}{' '}
                <strong>
                  <a href="#pricing">Get the full pathway report &rarr;</a>
                </strong>
              </div>
              <p style={{ fontSize: '0.9rem', marginTop: 'var(--space-2)' }}>
                Send me this pathway summary:
              </p>
              {!submitted ? (
                <div className="email-capture" style={{ maxWidth: 400, border: '1px solid var(--navy)' }}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && submitEmail()}
                  />
                  <button onClick={submitEmail}>Send</button>
                </div>
              ) : (
                <p style={{ color: 'var(--green)', fontSize: '0.85rem', marginTop: 8 }}>
                  Got it, we'll be in touch.
                </p>
              )}
              <button
                className="btn btn-ghost"
                style={{ marginTop: 'var(--space-3)', padding: 0, border: 'none', textDecoration: 'underline' }}
                onClick={reset}
              >
                Start over
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
