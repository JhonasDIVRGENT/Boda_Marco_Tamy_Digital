import invitationConfig from '../content/invitationConfig'

export default function MusicPlayer() {
  const { music } = invitationConfig

  return (
    <div className="music-bar">
      <div className="music-meta">
        <strong>{music.title}</strong>
        <span>{music.artist}</span>
      </div>
      {music.src ? <audio controls preload="metadata" src={music.src} /> : null}
      {music.spotifyUrl ? (
        <a className="music-spotify" href={music.spotifyUrl} target="_blank" rel="noreferrer">
          Spotify
        </a>
      ) : null}
    </div>
  )
}
