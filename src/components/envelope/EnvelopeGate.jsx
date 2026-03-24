import { useCallback, useState } from 'react'
import invitationConfig from '../../content/invitationConfig'
import './EnvelopeGate.css'

export default function EnvelopeGate({ onOpened }) {
  const [phase, setPhase] = useState('closed')

  const handleOpen = useCallback(() => {
    if (phase !== 'closed') return
    setPhase('open')
    setTimeout(() => setPhase('bursting'), 700)
    setTimeout(() => {
      onOpened?.()
    }, 1600)
  }, [phase, onOpened])

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        handleOpen()
      }
    },
    [handleOpen],
  )

  const { envelope, assets } = invitationConfig
  const hasOpenArt = Boolean(envelope.openedImageSrc?.trim())

  return (
    <div
      className={`envelope-root ${phase === 'bursting' || phase === 'open' ? 'is-bursting' : ''}`}
      role="presentation"
    >
      <div className="envelope-ink-overlay" aria-hidden />

      <div
        className={`envelope-stage ${!hasOpenArt ? 'envelope-stage--single' : ''} ${phase !== 'closed' ? 'is-open' : ''}`}
        onClick={handleOpen}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={envelope.hint}
      >
        <div className="envelope-images">
          <img
            className="envelope-photo envelope-photo--closed"
            src={envelope.closedImageSrc}
            alt="Sobre"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
          {hasOpenArt ? (
            <img
              className="envelope-photo envelope-photo--open"
              src={envelope.openedImageSrc}
              alt=""
              aria-hidden
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          ) : null}
        </div>
        {!envelope.hideOverlaySeal ? (
          <div className="envelope-seal-wrap">
            <div className="envelope-seal">{envelope.sealInitials}</div>
          </div>
        ) : null}
        <div className="envelope-ink-burst" aria-hidden />
        <p className="envelope-hint">{envelope.hint}</p>
      </div>
    </div>
  )
}
