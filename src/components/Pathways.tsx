interface Archetype {
  title: string;
  body: string;
  countries: string;
}

const ARCHETYPES: Archetype[] = [
  {
    title: 'Lightweight Dwelling Recognition',
    body: 'Formal integration into housing codes as a lightweight residential structure with a dedicated legal category.',
    countries: 'Wallonia, France ALUR',
  },
  {
    title: 'Care or Family Accessory Unit',
    body: 'Lighter procedural regime for structures housing elderly or care-dependent family members on the main parcel.',
    countries: 'Flanders, Germany',
  },
  {
    title: 'Recreational and Tourism',
    body: 'Placement on registered leisure parks, classified holiday villages, or commercial tourism land.',
    countries: 'France HLL/PRL, Portugal DL 117/2024',
  },
  {
    title: 'Pilot Project and Time-Limited',
    body: 'Temporary 5 to 10 year municipal permits, often pioneered by housing associations. Renewable in many cases.',
    countries: 'Netherlands',
  },
];

export default function Pathways() {
  return (
    <section id="pathways" className="pathways-section">
      <div className="pathways-container fade-up">
        <h2 className="pathways-heading">The four archetypes</h2>
        <div className="pathways-grid">
          {ARCHETYPES.map((a) => (
            <div key={a.title} className="pathway-card">
              <div className="pathway-card-title">{a.title}</div>
              <div className="pathway-card-body">{a.body}</div>
              <div className="pathway-card-countries">{a.countries}</div>
              <a href="#pricing" className="pathway-card-cta">Read the pathway &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
