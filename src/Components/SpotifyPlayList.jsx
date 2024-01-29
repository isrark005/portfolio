import React from 'react'

export function SpotifyPlayList() {
    

    return (
        <div className='container-custom'>
       <iframe
        title="Spotify Playlist"
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/0FEGbcpcNeWvCjR4pC2e0g?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      </div>
    )
}
