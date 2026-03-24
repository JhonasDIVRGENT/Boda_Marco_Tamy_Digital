export function ItineraryIcon({ name }) {
  const common = { viewBox: '0 0 24 24', width: 24, height: 24, 'aria-hidden': true }
  switch (name) {
    case 'arch':
      return (
        <svg {...common}>
          <path d="M4 20h16" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M6 20V10a6 6 0 0 1 12 0v10"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      )
    case 'hands':
      return (
        <svg {...common}>
          <path
            d="M8 14c-1 2 0 4 2 4h1M9 10V8l2-2 2 2v6"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M16 14c1 2 0 4-2 4h-1M15 10V8l-2-2-2 2v6"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      )
    case 'heart':
      return (
        <svg {...common}>
          <path
            d="M12 20s-7-4.6-7-10a4.5 4.5 0 0 1 7-2.9A4.5 4.5 0 0 1 19 10c0 5.4-7 10-7 10z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      )
    case 'glasses':
      return (
        <svg {...common}>
          <path
            d="M4 10h4l2 2h4l2-2h4M6 10v2a3 3 0 0 0 3 3M18 10v2a3 3 0 0 1-3 3"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      )
    case 'dance':
      return (
        <svg {...common}>
          <circle cx="9" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="16" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path
            d="M8 20l2-6 3-1 3 7M14 11l3 2"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      )
    case 'camera':
      return (
        <svg {...common}>
          <rect
            x="4"
            y="8"
            width="16"
            height="12"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="12" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      )
    case 'group':
      return (
        <svg {...common}>
          <circle cx="8" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="16" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path
            d="M4 20c0-3 2-5 4-5M16 15c2 0 4 2 4 5"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      )
    case 'dj':
      return (
        <svg {...common}>
          <rect x="5" y="6" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="9" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="15" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      )
  }
}
