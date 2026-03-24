import invitationConfig from '../../content/invitationConfig'
import ScrollReveal from '../ScrollReveal'
import { SectionScene } from '../SceneDecoration'
import Countdown from '../Countdown'

function TicketIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 8h16v8H4V8zm3 0v8M9 8v2M15 8v2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function RsvpClosingSection() {
  const r = invitationConfig.rsvp
  const m = invitationConfig.monogram

  return (
    <section className="page-section section-bg-cream">
      <SectionScene>
        <ScrollReveal>
          <div className="section-frame page-inner">
            <h2 className="heading-script text-gold-gradient gold" style={{ textAlign: 'center', margin: '0 0 1rem' }}>
              {r.title}
            </h2>
            <div style={{ textAlign: 'center' }}>
              <a className="btn-gold" href={r.formUrl} target="_blank" rel="noreferrer">
                <TicketIcon />
                {r.buttonLabel}
              </a>
            </div>
            <p className="body-text" style={{ textAlign: 'center', fontSize: '0.78rem', color: '#666' }}>
              {r.hint}
            </p>

            <Countdown />

            <div className="monogram-footer text-gold-gradient">
              <div className="mono-inner">
                {m.line1}
                {m.amp}
                {m.line2}
              </div>
            </div>

            <p
              className="heading-script"
              style={{
                textAlign: 'center',
                margin: '2rem 0 0',
                color: 'var(--pink-heading)',
                fontSize: 'clamp(1.25rem, 4vw, 1.6rem)',
              }}
            >
              {r.closingLine}
            </p>
          </div>
        </ScrollReveal>
      </SectionScene>
    </section>
  )
}
