export default function HeroMap() {
  return (
    <svg
      viewBox="0 0 400 330"
      xmlns="http://www.w3.org/2000/svg"
      className="hero-map-svg"
      aria-hidden="true"
    >
      {/* Latitude / longitude reference grid */}
      <g stroke="rgba(253,243,231,0.05)" strokeWidth="0.5">
        <line x1="0" y1="82" x2="400" y2="82" />
        <line x1="0" y1="165" x2="400" y2="165" />
        <line x1="0" y1="248" x2="400" y2="248" />
        <line x1="80" y1="0" x2="80" y2="330" />
        <line x1="160" y1="0" x2="160" y2="330" />
        <line x1="240" y1="0" x2="240" y2="330" />
        <line x1="320" y1="0" x2="320" y2="330" />
      </g>

      {/* Portugal */}
      <path
        d="M20,195 L58,192 L63,208 L65,232 L62,260 L51,280 L37,284 L21,274 L15,250 L13,220 Z"
        fill="rgba(192,135,59,0.15)"
        stroke="rgba(192,135,59,0.7)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <text x="38" y="242" textAnchor="middle" fill="rgba(253,243,231,0.55)" fontSize="8" letterSpacing="0.12em" fontFamily="Manrope, sans-serif" fontWeight="500">PT</text>

      {/* France */}
      <path
        d="M76,96 L126,82 L182,88 L230,106 L232,148 L222,190 L196,222 L160,228 L122,218 L96,198 L78,166 L74,128 Z"
        fill="rgba(192,135,59,0.15)"
        stroke="rgba(192,135,59,0.7)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <text x="154" y="160" textAnchor="middle" fill="rgba(253,243,231,0.55)" fontSize="9" letterSpacing="0.12em" fontFamily="Manrope, sans-serif" fontWeight="500">FR</text>

      {/* Belgium */}
      <path
        d="M184,88 L238,86 L240,112 L186,114 Z"
        fill="rgba(192,135,59,0.15)"
        stroke="rgba(192,135,59,0.7)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <text x="212" y="104" textAnchor="middle" fill="rgba(253,243,231,0.55)" fontSize="7" letterSpacing="0.1em" fontFamily="Manrope, sans-serif" fontWeight="500">BE</text>

      {/* Netherlands */}
      <path
        d="M186,64 L243,60 L240,86 L184,88 Z"
        fill="rgba(192,135,59,0.15)"
        stroke="rgba(192,135,59,0.7)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <text x="214" y="78" textAnchor="middle" fill="rgba(253,243,231,0.55)" fontSize="7" letterSpacing="0.1em" fontFamily="Manrope, sans-serif" fontWeight="500">NL</text>

      {/* Germany */}
      <path
        d="M240,86 L260,58 L292,42 L354,38 L374,84 L360,130 L344,166 L308,208 L270,216 L248,210 L230,190 L232,148 L230,106 L240,112 Z"
        fill="rgba(192,135,59,0.15)"
        stroke="rgba(192,135,59,0.7)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <text x="305" y="128" textAnchor="middle" fill="rgba(253,243,231,0.55)" fontSize="9" letterSpacing="0.12em" fontFamily="Manrope, sans-serif" fontWeight="500">DE</text>
    </svg>
  );
}
