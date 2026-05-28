import { useState } from 'react';
import { Link, useLocation } from 'wouter';

type Plan = 'report' | 'concierge';

export default function CustomerSignupPage() {
  const [, setLocation] = useLocation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [use, setUse] = useState('');
  const [land, setLand] = useState('');
  const [plan, setPlan] = useState<Plan>('report');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLocation('/app/customer');
  }

  return (
    <div className="auth-page">
      <div className="auth-left">
        <Link href="/" style={{ display: 'inline-block', marginBottom: 'var(--space-4)' }}>
          <img src="/logo.png" alt="Obelisk" style={{ height: 36 }} />
        </Link>

        <div className="auth-form-wrap">
          <h1 className="auth-title">Get your pathway report.</h1>
          <p className="auth-sub">Create your account and receive your compliant pathway in 48 hours.</p>

          <form onSubmit={handleSubmit} className="auth-form">
            <label className="auth-label">
              Full name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Emma Martin"
                required
              />
            </label>

            <label className="auth-label">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="emma@example.com"
                required
              />
            </label>

            <label className="auth-label">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 8 characters"
                required
              />
            </label>

            <div className="auth-section-heading">Your project</div>

            <label className="auth-label">
              Country
              <select
                className="auth-select"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                <option value="" disabled>Select a country</option>
                <option>Belgium</option>
                <option>France</option>
                <option>Netherlands</option>
                <option>Germany</option>
                <option>Portugal</option>
              </select>
            </label>

            <label className="auth-label">
              Intended use
              <select
                className="auth-select"
                value={use}
                onChange={(e) => setUse(e.target.value)}
                required
              >
                <option value="" disabled>Select a use</option>
                <option>Permanent residence</option>
                <option>Care or family unit</option>
                <option>Holiday and tourism</option>
                <option>Studio or office</option>
              </select>
            </label>

            <label className="auth-label">
              Land status
              <select
                className="auth-select"
                value={land}
                onChange={(e) => setLand(e.target.value)}
                required
              >
                <option value="" disabled>Select your situation</option>
                <option>Urban land I own</option>
                <option>Rural land I own</option>
                <option>No land yet</option>
              </select>
            </label>

            <div className="auth-section-heading">Choose a plan</div>

            <div className="auth-plan-grid">
              <button
                type="button"
                className={`auth-plan-card${plan === 'report' ? ' selected' : ''}`}
                onClick={() => setPlan('report')}
              >
                <div className="auth-plan-name">Pathway Report</div>
                <div className="auth-plan-price">€175 <span>one-time</span></div>
                <ul className="auth-plan-list">
                  <li>Full legal pathway document</li>
                  <li>Regional and commune-level detail</li>
                  <li>Documentary checklist</li>
                  <li>Builder shortlist included</li>
                </ul>
              </button>

              <button
                type="button"
                className={`auth-plan-card${plan === 'concierge' ? ' selected' : ''}`}
                onClick={() => setPlan('concierge')}
              >
                <div className="auth-plan-name">Premium Concierge</div>
                <div className="auth-plan-price">€499 <span>one-time</span></div>
                <ul className="auth-plan-list">
                  <li>Everything in the report</li>
                  <li>Permit dossier preparation</li>
                  <li>Builder matching and coordination</li>
                  <li>Insurance setup support</li>
                </ul>
              </button>
            </div>

            <button type="submit" className="btn btn-main auth-submit">
              Create account and order {plan === 'report' ? 'report' : 'concierge'} &rarr;
            </button>
          </form>

          <div className="auth-divider"><span>or</span></div>

          <button type="button" className="auth-sso">
            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z" fill="#34A853"/>
              <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          <p className="auth-footer">
            Already have an account?{' '}
            <Link href="/login" className="auth-link">Sign in</Link>
          </p>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-quote-wrap">
          <div className="auth-eyebrow small-caps">European tiny living, compliant by default</div>
          <h2 className="auth-quote">
            One document replaces six months of permit research.
          </h2>
          <ul className="auth-list">
            <li>Tailored to your country, region, and commune</li>
            <li>Verified against the current regulatory text</li>
            <li>Signed off by retained European legal counsel</li>
            <li>Delivered within 48 hours of your order</li>
            <li>14-day refund guarantee, no questions asked</li>
          </ul>
          <div className="auth-trust-row">
            <div className="auth-trust-item">
              <div className="auth-trust-num">5</div>
              <div className="auth-trust-label">countries covered</div>
            </div>
            <div className="auth-trust-item">
              <div className="auth-trust-num">12+</div>
              <div className="auth-trust-label">legal pathways mapped</div>
            </div>
            <div className="auth-trust-item">
              <div className="auth-trust-num">48h</div>
              <div className="auth-trust-label">delivery guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
