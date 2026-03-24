import invitationConfig from '../../content/invitationConfig'
import ScrollReveal from '../ScrollReveal'
import { SectionScene } from '../SceneDecoration'
import { MapPinned } from 'lucide-react'

export default function NosCasamosSection() {
  const c = invitationConfig.nosCasamos

  return (
    <section className="page-section section-bg-cream">
      <SectionScene>
        <ScrollReveal>
          <div className="section-frame page-inner">
            <p
              className="heading-script"
              style={{
                textAlign: 'center',
                color: 'var(--pink-heading)',
                fontSize: 'clamp(1.35rem, 4vw, 1.65rem)',
                margin: '0 0 0.5rem',
              }}
            >
              {c.introScript}
            </p>
            <h2 className="nos-heading-caps">{c.heading}</h2>

            <div className="nos-date-banner">
              <span className="nos-date-side">{c.weekday}</span>
              <div className="nos-date-center">
                <div className="nos-day-pillar">
                  <span className="nos-day-bar" />
                  <span className="nos-day-num">{c.dayNumber}</span>
                  <span className="nos-day-bar" />
                </div>
                <p className="nos-month-year">{c.monthYear}</p>
              </div>
              <span className="nos-date-side">{c.timeLabel}</span>
            </div>

            <p className="body-text" style={{ textAlign: 'center' }}>
              {c.invitationBody}
            </p>
            <p className="body-text" style={{ textAlign: 'center', fontWeight: 600 }}>
              {c.address}
            </p>

            <div style={{ textAlign: 'center', marginTop: '1.75rem' }}>
              <button type="button" className="btn-gold" onClick={() => window.open(c.mapsUrl, '_blank')}>
                <MapPinned size={18} strokeWidth={1.8} />
                {c.mapButtonLabel}
              </button>
            </div>
          </div>
        </ScrollReveal>
      </SectionScene>
    </section>
  )
}
