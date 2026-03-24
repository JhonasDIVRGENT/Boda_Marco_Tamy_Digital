/**
 * Edita aquí textos, enlaces e imágenes sin tocar los componentes.
 * Imágenes locales: colócalas en public/images/ y usa rutas como "/images/mi-foto.jpg"
 */
export const invitationConfig = {
  meta: {
    pageTitle: 'Marco & Tamara — Invitación',
    lang: 'es',
  },

  /** Fecha/hora del evento (zona horaria de Lima, Perú) */
  weddingDateTimeISO: '2026-04-18T13:00:00-05:00',

  countdown: {
    /** Misma fecha; ISO explícito para la cuenta regresiva */
    targetISO: '2026-04-18T13:00:00-05:00',
  },

  names: {
    scriptLine: 'Marco & Tamara',
    short: 'Marco & Tamy',
  },

  monogram: {
    line1: 'T',
    line2: 'M',
    amp: '&',
  },

  hero: {
    /** Sustituye por tu foto en /public/images/ */
    imageSrc:
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Marco y Tamara',
  },

  closing: {
    imageSrc:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Gracias por acompañarnos',
  },

  music: {
    /** Audio de prueba (URL pública). Coloca tu MP3 en public/audio/ y pon src: '/audio/wedding-track.mp3' */
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    title: 'Melodía de prueba',
    artist: 'SoundHelix',
    spotifyUrl: 'https://open.spotify.com/track/4PTG3Z6ohGkBX6BsjsCRca',
  },

  nosCasamos: {
    introScript:
      'Nuestra historia de amor inicia un capítulo nuevo...',
    heading: 'Nos casamos !!',
    weekday: 'Sábado',
    timeLabel: '1:00 PM',
    dayNumber: '18',
    monthYear: 'Abril 2026',
    invitationBody:
      'Tenemos el honor de invitarlos a nuestra boda civil y celebración de nuestra unión, en:',
    address: 'Characato Asovich, zona C MZ. N lote 5.',
    mapButtonLabel: 'Ver mapa',
    /**
     * Sustituye por el enlace exacto de Google Maps del lugar.
     */
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Characato+Asovich%2C+Arequipa',
  },

  dressCode: {
    title: 'Código de vestimenta',
    subtitle: 'Formal',
    bullets: [
      'Damas: Vestido elegante, no blanco ni colores muy claros.',
      'Caballeros: Traje formal.',
    ],
  },

  gifts: {
    title: 'Sugerencia de regalos',
    intro:
      'El mejor regalo es tu presencia, pero si deseas hacernos un obsequio tenemos estas opciones:',
    bankButtonLabel: 'Click aquí',
    envelopeNote: 'Lluvia de sobres en recepción',
    bankLabel: 'Número de cuenta',
  },

  bankDetails: {
    title: 'Número de cuenta',
    blocks: [
      {
        name: 'Marco',
        lines: [
          'Caja Arequipa CCI:',
          '80300400399742400110',
        ],
      },
      {
        name: 'Tamy',
        lines: [
          'Cuenta Interbank:',
          'Cuenta Cuenta Simple Soles en Interbank es:',
          '8983393105439',
          '',
          'Mi número de Cuenta Interbancario (CCI) en Interbank es:',
          '00389801339310543948',
        ],
      },
    ],
  },

  noKids: {
    title: 'No niños',
    text:
      'Queremos que todos disfruten sin preocupaciones, por lo que la celebración será sólo para adultos.',
  },

  itinerary: {
    title: 'Itinerario',
    events: [
      { time: '12:00 PM', label: 'Recepción de invitados', side: 'right', icon: 'arch' },
      { time: '1:00 PM', label: 'Ceremonia civil', side: 'left', icon: 'hands' },
      { time: '2:00 PM', label: 'Ceremonia especial / votos', side: 'right', icon: 'heart' },
      { time: '3:00 PM', label: 'Brindis', side: 'left', icon: 'glasses' },
      { time: '3:15 PM', label: 'Primer baile de los novios', side: 'right', icon: 'dance' },
      { time: '3:30 PM', label: 'Fotos', side: 'left', icon: 'camera' },
      { time: '4:00 PM', label: 'Showcase de baile', side: 'right', icon: 'group' },
      { time: '5:00 PM', label: 'Wedding party', side: 'left', icon: 'dj' },
    ],
  },

  rsvp: {
    title: 'Confirmación de asistencia',
    buttonLabel: 'Click aquí',
    hint:
      'Tu compañía es muy importante para nosotros, por favor confírmanos tu asistencia lo antes posible.',
    closingLine:
      'Nada nos hará más felices que celebrar este día tan especial rodeados de quienes más queremos.',
    /**
     * Sustituye por tu Google Form / Typeform / etc.
     */
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfexample/viewform',
  },

  envelope: {
    hint: 'Toca para abrir',
    sealInitials: 'M · T',
  },
}

export default invitationConfig
