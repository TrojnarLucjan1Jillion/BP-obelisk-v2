import { useState } from 'react';
import { Link, useLocation } from 'wouter';

type Role = 'customer' | 'builder';

export default function LoginPage() {
  const [role, setRole] = useState<Role>('customer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [, setLocation] = useLocation();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Visual only. Route to the matching dashboard.
    setLocation(role === 'customer' ? '/app/customer' : '/app/builder');
  }

  return (
    <div className="auth-page">
      <div className="auth-left">
        <Link href="/" style={{ display: 'inline-block', marginBottom: 'var(--space-4)' }}>
          <img src="/logo.png" alt="Obelisk" style={{ height: 36 }} />
        </Link>

        <div className="auth-form-wrap">
          <h1 className="auth-title">Welcome back.</h1>
          <p className="auth-sub">Sign in to your Obelisk workspace.</p>

          <div className="role-toggle">
            <button
              type="button"
              className={role === 'customer' ? 'role-btn active' : 'role-btn'}
              onClick={() => setRole('customer')}
            >
              I'm a customer
            </button>
            <button
              type="button"
              className={role === 'builder' ? 'role-btn active' : 'role-btn'}
              onClick={() => setRole('builder')}
            >
              I'm a builder
            </button>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <label className="auth-label">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={role === 'customer' ? 'emma@example.com' : 'studio@yourbuild.eu'}
                required
              />
            </label>

            <label className="auth-label">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </label>

            <div className="auth-options">
              <label className="auth-checkbox">
                <input type="checkbox" /> <span>Remember me</span>
              </label>
              <a href="#" className="auth-link-small">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-main auth-submit">
              Sign in to {role === 'customer' ? 'your pathway' : 'the builder network'}
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
            {role === 'customer' ? "Don't have a pathway yet?" : "Want to join the network?"}{' '}
            <a href={role === 'customer' ? '/#diagnostic' : '/#builders'} className="auth-link">
              {role === 'customer' ? 'Take the diagnostic' : 'Apply to join'}
            </a>
          </p>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-quote-wrap">
          <div className="auth-eyebrow small-caps">European tiny living, compliant by default</div>
          {role === 'customer' ? (
            <>
              <h2 className="auth-quote">
                The pathway that took six months to research, delivered as one document.
              </h2>
              <ul className="auth-list">
                <li>Tailored to your country, region, and commune</li>
                <li>Signed off by retained legal counsel</li>
                <li>Includes a vetted builder shortlist</li>
                <li>Monitored after the build for regulatory change</li>
              </ul>
            </>
          ) : (
            <>
              <h2 className="auth-quote">
                Qualified leads. Compliant specifications. No commission.
              </h2>
              <ul className="auth-list">
                <li>Every lead arrives pre-qualified on a legal pathway</li>
                <li>Customer profile, land status, budget already verified</li>
                <li>Twenty-nine euros per month, per region</li>
                <li>Cancel any time, no commission ever</li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
