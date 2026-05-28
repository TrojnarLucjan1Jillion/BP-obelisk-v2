import { Link } from 'wouter';

export default function Builders() {
  return (
    <section id="builders" className="builders">
      <div className="container fade-up">
        <h2>For European builders.<br />Qualified leads. Compliant specifications.</h2>
        <div className="three-col">
          <div>
            <h3>Qualified leads only</h3>
            <p>Every buyer is pre-qualified with a verified regulatory pathway before the lead reaches you. Your sales cycle drops from months to weeks.</p>
          </div>
          <div>
            <h3>Pathway-compliant specs</h3>
            <p>Buyers arrive with a pathway report already mapped to a legal route. You don't translate regulation, you build.</p>
          </div>
          <div>
            <h3>Network membership</h3>
            <p>Listed in the vetted Obelisk directory. Receive matched leads in your region. Optional pathway training included.</p>
          </div>
        </div>
        <div className="small-caps" style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 'var(--space-2)', marginTop: 'var(--space-3)' }}>
          €29 / month per region &middot; No commission &middot; No platform setup fees
        </div>
        <Link href="/signup/builder" className="btn" style={{ background: '#fff', color: 'var(--green)', marginTop: 'var(--space-2)', display: 'inline-block' }}>Apply to join the network &rarr;</Link>
      </div>
    </section>
  );
}
