import { useCallback, useEffect, useRef, useState } from 'react'
import { Pause, Play, Volume2, VolumeX } from 'lucide-react'
import invitationConfig from '../content/invitationConfig'

function formatTime(s) {
  if (!Number.isFinite(s) || s < 0) return '0:00'
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${String(sec).padStart(2, '0')}`
}

export default function MusicPlayer() {
  const { music } = invitationConfig
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [duration, setDuration] = useState(0)
  const [current, setCurrent] = useState(0)

  const togglePlay = useCallback(() => {
    const a = audioRef.current
    if (!a) return
    if (a.paused) {
      void a.play().catch(() => {})
    } else {
      a.pause()
    }
  }, [])

  useEffect(() => {
    const a = audioRef.current
    if (!a) return undefined

    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    const onTime = () => setCurrent(a.currentTime)
    const onMeta = () => setDuration(a.duration || 0)
    const onEnded = () => setPlaying(false)

    a.addEventListener('play', onPlay)
    a.addEventListener('pause', onPause)
    a.addEventListener('timeupdate', onTime)
    a.addEventListener('loadedmetadata', onMeta)
    a.addEventListener('ended', onEnded)

    return () => {
      a.removeEventListener('play', onPlay)
      a.removeEventListener('pause', onPause)
      a.removeEventListener('timeupdate', onTime)
      a.removeEventListener('loadedmetadata', onMeta)
      a.removeEventListener('ended', onEnded)
    }
  }, [music.src])

  const onSeek = useCallback((e) => {
    const a = audioRef.current
    if (!a || !duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = Math.min(Math.max(0, e.clientX - rect.left), rect.width)
    a.currentTime = (x / rect.width) * duration
    setCurrent(a.currentTime)
  }, [duration])

  const toggleMute = useCallback(() => {
    const a = audioRef.current
    if (!a) return
    a.muted = !a.muted
    setMuted(a.muted)
  }, [])

  if (!music.src) return null

  const progress = duration ? (current / duration) * 100 : 0

  return (
    <div className="music-player">
      <audio ref={audioRef} src={music.src} preload="metadata" />
      <div className="music-player__glass">
        <button
          type="button"
          className="music-player__play"
          onClick={togglePlay}
          aria-label={playing ? 'Pausar' : 'Reproducir'}
        >
          {playing ? <Pause size={22} strokeWidth={2} /> : <Play size={22} strokeWidth={2} className="music-player__play-icon" />}
        </button>
        <div className="music-player__body">
          <div className="music-player__title">{music.title}</div>
          {music.artist ? <div className="music-player__artist">{music.artist}</div> : null}
          <div
            className="music-player__track"
            role="slider"
            tabIndex={0}
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
            onClick={onSeek}
            onKeyDown={(e) => {
              if (!audioRef.current || !duration) return
              const step = 5
              if (e.key === 'ArrowRight') {
                audioRef.current.currentTime = Math.min(duration, audioRef.current.currentTime + step)
              } else if (e.key === 'ArrowLeft') {
                audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - step)
              }
            }}
          >
            <div className="music-player__track-fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="music-player__times">
            <span>{formatTime(current)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
        <button type="button" className="music-player__mute" onClick={toggleMute} aria-label={muted ? 'Activar sonido' : 'Silenciar'}>
          {muted ? <VolumeX size={18} strokeWidth={1.8} /> : <Volume2 size={18} strokeWidth={1.8} />}
        </button>
      </div>
    </div>
  )
}
