import { useEffect, useRef } from 'react';

const HIGHLIGHT_STYLE = `
  .seabase { fill: transparent !important; opacity: 0 !important; }
  .region { fill: rgba(253,243,231,0.06) !important; stroke: rgba(253,243,231,0.18) !important; stroke-width: 1.5 !important; }
  .BEL, .FRA, .NLD, .DEU, .PRT { fill: rgba(192,135,59,0.55) !important; stroke: rgba(192,135,59,0.9) !important; stroke-width: 2 !important; }
`;

export default function HeroMap() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    fetch('/europe.svg')
      .then((r) => r.text())
      .then((text) => {
        if (cancelled || !ref.current) return;
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'image/svg+xml');
        const svg = doc.querySelector('svg');
        if (!svg) return;

        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.style.display = 'block';

        // remove background gradient rects
        svg.querySelectorAll('.seabase, [class*="seabase"]').forEach((el) => {
          (el as SVGElement).style.display = 'none';
        });

        // inject overrides
        const style = doc.createElementNS('http://www.w3.org/2000/svg', 'style');
        style.textContent = HIGHLIGHT_STYLE;
        svg.prepend(style);

        ref.current.innerHTML = '';
        ref.current.appendChild(svg);
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  return (
    <div
      ref={ref}
      className="hero-map-wrap"
      aria-hidden="true"
      style={{ width: '100%', maxWidth: 480, aspectRatio: '1613 / 1417' }}
    />
  );
}
