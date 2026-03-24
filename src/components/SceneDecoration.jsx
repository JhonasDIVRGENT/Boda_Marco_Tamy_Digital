import './scene-decoration.css'
import invitationConfig from '../content/invitationConfig'

function DecorationImage({ src, className }) {
  if (!src) return null
  return (
    <img
      src={src}
      className={className}
      alt=""
      aria-hidden
      onError={(e) => {
        e.currentTarget.style.display = 'none'
      }}
    />
  )
}

export function SakuraCorner({ position = 'tl' }) {
  const { assets } = invitationConfig
  const src = position === 'tr' ? assets.sakuraRight : assets.sakuraLeft
  return <DecorationImage src={src} className={`scene-sakura scene-sakura--${position}`} />
}

export function CloudLayer({ variant = 'h' }) {
  const { assets } = invitationConfig
  const srcMap = {
    h: assets.cloudHorizontal,
    v: assets.cloudVertical,
    h2: assets.cloudHorizontal,
    v2: assets.cloudVertical,
  }
  const cloudSrc = srcMap[variant] || assets.cloudHorizontal
  return <DecorationImage src={cloudSrc} className={`scene-cloud scene-cloud--${variant}`} />
}

export function PinkCloud() {
  const { assets } = invitationConfig
  return <DecorationImage src={assets.cloudPink} className="scene-cloud scene-cloud--pink" />
}

export function PetalsField() {
  const { assets } = invitationConfig
  const petal = assets.sakuraPetal
  if (!petal) return null
  return (
    <div className="petals-field" aria-hidden>
      {[...Array(12)].map((_, i) => (
        <img
          key={i}
          className="petals-field__petal"
          style={{ '--i': i }}
          src={petal}
          alt=""
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      ))}
    </div>
  )
}

export function SectionScene({ children }) {
  return (
    <div className="section-scene">
      <CloudLayer variant="h" />
      <CloudLayer variant="h2" />
      <CloudLayer variant="v" />
      <CloudLayer variant="v2" />
      <PinkCloud />
      <SakuraCorner position="tl" />
      <SakuraCorner position="tr" />
      <PetalsField />
      {children}
    </div>
  )
}
