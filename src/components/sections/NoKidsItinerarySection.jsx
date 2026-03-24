import invitationConfig from '../../content/invitationConfig'
import ScrollReveal from '../ScrollReveal'
import { SectionScene } from '../SceneDecoration'
import { ItineraryIcon } from '../itineraryIcons'
import './invitation.css'

export default function NoKidsItinerarySection() {
  const nk = invitationConfig.noKids
  const it = invitationConfig.itinerary

  return (
    <section className="page-section section-bg-cream">
      <SectionScene>
        <ScrollReveal>
          <div className="section-frame page-inner">
            <h2 className="heading-script text-pink-script" style={{ textAlign: 'center', margin: '0 0 0.75rem' }}>
              {nk.title}
            </h2>
            <p className="body-text" style={{ textAlign: 'center' }}>
              {nk.text}
            </p>

            <hr
              style={{
                border: 'none',
                borderTop: '1px solid rgba(0,0,0,0.08)',
                margin: '2rem 0 1.5rem',
              }}
            />

            <div className="flourish-row">
              <span className="flourish-line" />
              <h2 className="heading-script text-gold-gradient gold" style={{ margin: 0 }}>
                {it.title}
              </h2>
              <span className="flourish-line" />
            </div>

            <div className="timeline-list">
              {it.events.map((e) => (
                <div key={`${e.time}-${e.label}`} className="timeline-grid">
                  <div className="timeline-slot timeline-slot--left">
                    {e.side === 'left' ? (
                      <>
                        <div className="timeline-time">{e.time}</div>
                        <div className="timeline-label">{e.label}</div>
                      </>
                    ) : null}
                  </div>
                  <div className="timeline-icon-cell">
                    <ItineraryIcon name={e.icon} />
                  </div>
                  <div className="timeline-slot timeline-slot--right">
                    {e.side === 'right' ? (
                      <>
                        <div className="timeline-time">{e.time}</div>
                        <div className="timeline-label">{e.label}</div>
                      </>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </SectionScene>
    </section>
  )
}
