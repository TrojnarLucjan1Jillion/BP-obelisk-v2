import { useState } from 'react';
import { Link, useLocation } from 'wouter';

const SPECIALISMS = ['CLT', 'Timber frame', 'Hybrid timber', 'Mobile / relocatable', 'Off-grid systems', 'Prefab modular'];

export default function BuilderSignupPage() {
  const [, setLocation] = useLocation();
  const [company, setCompany] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [region, setRegion] = useState('');
  const [builds, setBuilds] = useState('');
  const [specialisms, setSpecialisms] = useState<string[]>([]);

  function toggleSpecialism(s: string) {
    setSpecialisms((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLocation('/app/builder');
  }

  return (
    <div className="auth-page">
      <div className="auth-left">
        <Link href="/" style={{ display: 'inline-block', marginBottom: 'var(--space-4)' }}>
          <img src="/logo.png" alt="Obelisk" style={{ height: 36 }} />
        </Link>

        <div className="auth-form-wrap">
          <h1 className="auth-title">Join the builder network.</h1>
          <p className="auth-sub">Apply for access to pre-qualified leads in your region.</p>

          <form onSubmit={handleSubmit} className="auth-form">
            <label className="auth-label">
              Company name
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Bois Construct Namur"
                required
              />
            </label>

            <label className="auth-label">
              Your name
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Contact person"
                required
              />
            </label>

            <label className="auth-label">
              Business email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="studio@yourcompany.eu"
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

            <div className="auth-section-heading">Your coverage</div>

            <label className="auth-label">
              Primary country and region
              <input
                type="text"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                placeholder="e.g. Belgium, Wallonia"
                required
              />
            </label>

            <label className="auth-label">
              Tiny homes completed
              <select
                className="auth-select"
                value={builds}
                onChange={(e) => setBuilds(e.target.value)}
                required
              >
                <option value="" disabled>Select a range</option>
                <option>0 to 2 (just starting)</option>
                <option>3 to 10</option>
                <option>11 to 25</option>
                <option>More than 25</option>
              </select>
            </label>

            <div className="auth-section-heading">Specialisms</div>
            <div className="auth-specialism-grid">
              {SPECIALISMS.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`auth-specialism-chip${specialisms.includes(s) ? ' selected' : ''}`}
                  onClick={() => toggleSpecialism(s)}
                >
                  {s}
                </button>
              ))}
            </div>

            <button type="submit" className="btn btn-main auth-submit" style={{ background: 'var(--green)', borderColor: 'var(--green)' }}>
              Apply for network access &rarr;
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
            Already in the network?{' '}
            <Link href="/login" className="auth-link">Sign in</Link>
          </p>
        </div>
      </div>

      <div className="auth-right" style={{ background: 'var(--green)' }}>
        <div className="auth-quote-wrap">
          <div className="auth-eyebrow small-caps">The Obelisk builder network</div>
          <h2 className="auth-quote">
            Qualified leads. Compliant specifications. No commission, ever.
          </h2>
          <ul className="auth-list">
            <li>Every lead arrives pre-qualified on a verified legal pathway</li>
            <li>Customer profile, land status, and budget already confirmed</li>
            <li>Pathway-compliant specifications included with each lead</li>
            <li>Twenty-nine euros per month per region, cancel any time</li>
            <li>Optional pathway training and certification included</li>
          </ul>
          <div className="auth-trust-row">
            <div className="auth-trust-item">
              <div className="auth-trust-num">€29</div>
              <div className="auth-trust-label">per region per month</div>
            </div>
            <div className="auth-trust-item">
              <div className="auth-trust-num">0%</div>
              <div className="auth-trust-label">commission</div>
            </div>
            <div className="auth-trust-item">
              <div className="auth-trust-num">5</div>
              <div className="auth-trust-label">countries</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
