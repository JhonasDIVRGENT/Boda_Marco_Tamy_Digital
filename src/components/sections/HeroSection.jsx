import invitationConfig from '../../content/invitationConfig'
import MusicPlayer from '../MusicPlayer'
import './invitation.css'

function MiniSakura({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden>
      <path d="M8 88 Q38 52 52 28 Q68 10 92 8" stroke="#4a3528" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="55" cy="30" r="6" fill="#e8869c" />
      <circle cx="68" cy="38" r="4" fill="#f8c4d2" />
      <circle cx="42" cy="44" r="5" fill="#f3a5b8" />
    </svg>
  )
}

export default function HeroSection() {
  const { names, monogram, hero } = invitationConfig

  return (
    <header className="hero-section">
      <div className="hero-ink-wash" aria-hidden />
      <MiniSakura className="sakura-hero-lr sakura-hero-lr--l" />
      <MiniSakura className="sakura-hero-lr sakura-hero-lr--r" />

      <div className="hero-photo-wrap">
        <img src={hero.imageSrc} alt={hero.imageAlt} width={640} height={853} loading="eager" />
      </div>

      <div className="hero-names">
        <div className="flourish-row">
          <span className="flourish-line" />
          <h1 className="heading-script gold text-gold-gradient" style={{ margin: 0 }}>
            {names.scriptLine}
          </h1>
          <span className="flourish-line" />
        </div>
      </div>

      <div className="hero-monogram-wrap text-gold-gradient">
        <div className="mono-letters">
          {monogram.line1}
          {monogram.amp}
          {monogram.line2}
        </div>
      </div>

      <MusicPlayer />
    </header>
  )
}
