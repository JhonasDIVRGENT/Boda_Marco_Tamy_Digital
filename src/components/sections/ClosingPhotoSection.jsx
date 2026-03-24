import invitationConfig from '../../content/invitationConfig'
import ScrollReveal from '../ScrollReveal'
import './invitation.css'

export default function ClosingPhotoSection() {
  const { closing } = invitationConfig

  return (
    <section className="page-section" style={{ background: '#fff', paddingBottom: '4rem' }}>
      <ScrollReveal>
        <div className="page-inner" style={{ maxWidth: '36rem' }}>
          <div
            style={{
              borderRadius: 6,
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(30, 42, 58, 0.15)',
            }}
          >
            <img src={closing.imageSrc} alt={closing.imageAlt} width={1200} height={900} loading="lazy" />
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
