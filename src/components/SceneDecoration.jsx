import './scene-decoration.css'

export function InkCorner({ position = 'tr' }) {
  return <div className={`scene-ink scene-ink--${position}`} aria-hidden />
}

export function SakuraCorner({ position = 'tr' }) {
  return (
    <svg
      className={`scene-sakura scene-sakura--${position}`}
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M20 160 Q60 100 90 60 Q120 30 170 20"
        stroke="#4a3528"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="100" cy="55" r="8" fill="#f3a5b8" />
      <circle cx="120" cy="70" r="6" fill="#e8869c" />
      <circle cx="85" cy="75" r="7" fill="#f8c4d2" />
      <circle cx="140" cy="45" r="5" fill="#f3a5b8" />
      <circle cx="60" cy="120" r="6" fill="#e8869c" />
      <path
        d="M150 30 Q130 50 110 40"
        stroke="#4a3528"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function PetalsField() {
  return (
    <div className="petals-field" aria-hidden>
      {[...Array(12)].map((_, i) => (
        <span key={i} className="petals-field__petal" style={{ '--i': i }} />
      ))}
    </div>
  )
}

export function SectionScene({ children }) {
  return (
    <div className="section-scene">
      <InkCorner position="tr" />
      <InkCorner position="bl" />
      <SakuraCorner position="tl" />
      <SakuraCorner position="br" />
      <PetalsField />
      {children}
    </div>
  )
}
