import invitationConfig from '../../content/invitationConfig'
import ScrollReveal from '../ScrollReveal'
import { SectionScene } from '../SceneDecoration'

function BillIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function SuitDressSilhouettes() {
  return (
    <div className="dress-visual" aria-hidden>
      <svg viewBox="0 0 60 80" fill="#1a1a1a">
        <circle cx="30" cy="6" r="5" />
        <path d="M30 12 L38 16 L42 26 L48 30 L46 72 L14 72 L12 30 L18 26 L22 16 Z" />
      </svg>
      <svg viewBox="0 0 60 80" fill="#1a1a1a">
        <path d="M30 6 C34 6 38 9 38 14 L36 26 L42 32 L40 74 L20 74 L18 32 L24 26 L22 14 C22 9 26 6 30 6Z" />
      </svg>
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
                  <BillIcon />
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
