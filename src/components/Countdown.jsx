import { useEffect, useState } from 'react'
import invitationConfig from '../content/invitationConfig'

function pad(n) {
  return String(n).padStart(2, '0')
}

export default function Countdown() {
  const target = new Date(invitationConfig.countdown.targetISO).getTime()
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])

  const diff = Math.max(0, target - now)
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  const cells = [
    { label: 'Días', value: pad(days) },
    { label: 'Horas', value: pad(hours) },
    { label: 'Minutos', value: pad(minutes) },
    { label: 'Segundos', value: pad(seconds), accent: true },
  ]

  return (
    <div className="countdown-grid">
      {cells.map((c) => (
        <div key={c.label}>
          <div
            className={`countdown-value${c.accent ? ' countdown-value--seconds' : ''}`}
          >
            {c.value}
          </div>
          <div className="countdown-label">{c.label}</div>
        </div>
      ))}
    </div>
  )
}
