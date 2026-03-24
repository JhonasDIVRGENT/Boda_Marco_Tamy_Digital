import invitationConfig from '../../content/invitationConfig'
import MusicPlayer from '../MusicPlayer'
import './invitation.css'

export default function HeroSection() {
  const { names, hero, assets } = invitationConfig

  return (
    <header className="hero-section">
      <img className="hero-photo-bg" src={hero.imageSrc} alt={hero.imageAlt} width={1080} height={1920} loading="eager" />
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-names">
          <div className="flourish-row">
            <span className="flourish-line" />
            <h1 className="heading-script gold text-gold-gradient" style={{ margin: 0 }}>
              {names.scriptLine}
            </h1>
            <span className="flourish-line" />
          </div>
        </div>
        <div className="hero-logo-wrap">
          <img
            src={assets.logoTm}
            alt="Logo T&M"
            className="hero-logo"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
        <div className="hero-player-wrap">
          <MusicPlayer />
        </div>
      </div>
    </header>
  )
}
