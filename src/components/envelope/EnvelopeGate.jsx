import { useCallback, useState } from 'react'
import invitationConfig from '../../content/invitationConfig'
import './EnvelopeGate.css'

function SakuraBranch({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M10 90 Q40 70 55 45 Q70 20 95 15"
        stroke="#5c4030"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="62" cy="38" r="5" fill="#f3a5b8" opacity="0.9" />
      <circle cx="72" cy="32" r="4" fill="#f8c4d2" />
      <circle cx="54" cy="44" r="4.5" fill="#e8869c" />
      <circle cx="82" cy="48" r="3.5" fill="#f3a5b8" />
      <circle cx="44" cy="58" r="3" fill="#f8c4d2" />
    </svg>
  )
}

export default function EnvelopeGate({ onOpened }) {
  const [phase, setPhase] = useState('closed')

  const handleOpen = useCallback(() => {
    if (phase !== 'closed') return
    setPhase('open')
    setTimeout(() => setPhase('bursting'), 650)
    setTimeout(() => {
      onOpened?.()
    }, 1550)
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

  const { envelope } = invitationConfig

  return (
    <div
      className={`envelope-root ${phase === 'bursting' || phase === 'open' ? 'is-bursting' : ''} ${phase === 'done' ? 'is-done' : ''}`}
      role="presentation"
    >
      <div className="envelope-ink-overlay" aria-hidden />
      <SakuraBranch className="envelope-sakura envelope-sakura--tl" />
      <SakuraBranch className="envelope-sakura envelope-sakura--br" />
      <div className="petal-float" aria-hidden />
      <div className="petal-float" aria-hidden />
      <div className="petal-float" aria-hidden />

      <div
        className={`envelope-stage ${phase !== 'closed' ? 'is-open' : ''}`}
        onClick={handleOpen}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={envelope.hint}
      >
        <div className="envelope-back">
          <div className="envelope-inner-card">
            <p
              className="text-gold-gradient heading-script gold"
              style={{ margin: 0, textAlign: 'center', fontSize: '2rem' }}
            >
              {invitationConfig.names.scriptLine}
            </p>
          </div>
          <div className="envelope-flap-bottom" />
          <div className="envelope-flap-top" />
          <div className="envelope-seal">{envelope.sealInitials}</div>
          <div className="envelope-ink-burst" />
        </div>
        <p className="envelope-hint">{envelope.hint}</p>
      </div>
    </div>
  )
}
