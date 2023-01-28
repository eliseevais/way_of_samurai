import React from "react";
import styles from './Music.module.css';

let Music = (props) => {
console.log('props', props)

  return (
    <div>
      {
        props.songsList.map(song => <div key={song.id}>
          <div className={styles.songString}>
            <div>{song.author}</div>
          <div>{song.songTitle}</div>
          <div>
              {song.addStatus
                ? <button onClick={() => { props.removeSong(song.id) }}>delete</button>
                : <button onClick={() => { props.addSong(song.id) }}>add +</button>}
            </div>
          </div>
        </div>)
      }
    </div>
  )
}

export default Music;