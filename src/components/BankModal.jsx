import invitationConfig from '../content/invitationConfig'

function BackIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M15 6L9 12L15 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function BankModal({ open, onClose }) {
  if (!open) return null

  const { bankDetails } = invitationConfig

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="bank-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="modal-panel">
        <div className="flourish-row">
          <span className="flourish-line" />
          <h2 id="bank-modal-title" className="heading-script" style={{ color: '#2b2b2b' }}>
            {bankDetails.title}
          </h2>
          <span className="flourish-line" />
        </div>
        <div style={{ textAlign: 'center' }}>
          {bankDetails.blocks.map((block) => (
            <div key={block.name} className="bank-block">
              <p className="bank-name">{block.name}:</p>
              {block.lines.map((line, i) => (
                <p key={`${block.name}-${i}`} className="bank-line">
                  {line || '\u00a0'}
                </p>
              ))}
            </div>
          ))}
        </div>
        <button type="button" className="modal-back" onClick={onClose} aria-label="Volver">
          <BackIcon />
        </button>
      </div>
    </div>
  )
}
