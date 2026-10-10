/**
 * MoneyBrief brand mark — three rising growth bars on a green gradient tile,
 * the tallest in gold. Reads as wealth growth at any size; no letterforms.
 */
export default function Logo({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="mbLogoBg" x1="6" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#118a6b" />
          <stop offset="0.55" stopColor="#0b5d47" />
          <stop offset="1" stopColor="#06402f" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill="url(#mbLogoBg)" />
      <rect x="0.75" y="0.75" width="46.5" height="46.5" rx="12.25" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" />
      <rect x="10.5" y="27" width="7" height="10.5" rx="3.5" fill="#ffffff" opacity="0.85" />
      <rect x="20.5" y="19.5" width="7" height="18" rx="3.5" fill="#ffffff" />
      <rect x="30.5" y="11" width="7" height="26.5" rx="3.5" fill="#f5c451" />
      <circle cx="34" cy="7" r="1.8" fill="#f5c451" opacity="0.9" />
    </svg>
  );
}
