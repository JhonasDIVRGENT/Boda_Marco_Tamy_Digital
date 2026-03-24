import invitationConfig from '../../content/invitationConfig'
import ScrollReveal from '../ScrollReveal'
import { SectionScene } from '../SceneDecoration'
import { WalletCards } from 'lucide-react'

function SuitDressSilhouettes() {
  const imageSrc = invitationConfig.dressCode.formalImageSrc
  return (
    <div className="dress-visual" aria-hidden>
      <img
        className="dress-visual-image"
        src={imageSrc}
        alt=""
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      />
    </div>
  )
}

export default function DressCodeGiftsSection({ onOpenBank }) {
  const dc = invitationConfig.dressCode
  const g = invitationConfig.gifts

  return (
    <section className="page-section section-bg-cream page-section--tight-top">
      <SectionScene>
        <ScrollReveal>
          <div className="section-frame page-inner">
            <div className="flourish-row">
              <span className="flourish-line pink" />
              <h2 className="heading-script text-pink-script" style={{ margin: 0 }}>
                {dc.title}
              </h2>
              <span className="flourish-line pink" />
            </div>
            <p
              className="heading-script"
              style={{ textAlign: 'center', margin: '0.5rem 0 1rem', color: '#222', fontSize: '1.75rem' }}
            >
              {dc.subtitle}
            </p>
            <ul style={{ margin: '0 0 1rem', paddingLeft: '1.1rem' }} className="body-text">
              {dc.bullets.map((b) => (
                <li key={b} style={{ marginBottom: '0.35rem' }}>
                  {b}
                </li>
              ))}
            </ul>
            <SuitDressSilhouettes />

            <hr
              style={{
                border: 'none',
                borderTop: '1px solid rgba(0,0,0,0.08)',
                margin: '2rem 0 1.5rem',
              }}
            />

            <div className="flourish-row">
              <span className="flourish-line dark" />
              <h2 className="heading-script" style={{ margin: 0, color: '#222', fontSize: '2rem' }}>
                {g.title}
              </h2>
              <span className="flourish-line dark" />
            </div>
            <p className="body-text" style={{ textAlign: 'center' }}>
              {g.intro}
            </p>

            <div className="gifts-grid">
              <div className="gift-col">
                <p className="script-label">{g.bankLabel}</p>
                <button type="button" className="btn-gold" style={{ marginTop: '0.75rem' }} onClick={onOpenBank}>
                  <WalletCards size={18} strokeWidth={1.8} />
                  {g.bankButtonLabel}
                </button>
              </div>
              <div className="gift-col">
                <p className="script-label" style={{ marginTop: '0.5rem' }}>
                  {g.envelopeNote}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </SectionScene>
    </section>
  )
}
