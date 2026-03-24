import invitationConfig from '../../content/invitationConfig'
import ScrollReveal from '../ScrollReveal'
import { SectionScene } from '../SceneDecoration'
import Countdown from '../Countdown'
import { Ticket } from 'lucide-react'

export default function RsvpClosingSection() {
  const r = invitationConfig.rsvp
  const { logoTm } = invitationConfig.assets

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
                <Ticket size={18} strokeWidth={1.8} />
                {r.buttonLabel}
              </a>
            </div>
            <p className="body-text" style={{ textAlign: 'center', fontSize: '0.78rem', color: '#666' }}>
              {r.hint}
            </p>

            <Countdown />

            <div className="rsvp-logo-wrap">
              <img
                src={logoTm}
                alt="T&M"
                className="rsvp-logo"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
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
