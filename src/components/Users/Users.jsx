import React from 'react';
import styles from './Users.module.css';

let Users = (props) => {

  if (props.users.length === 0) {
    

    props.setUsers([
      {
        id: 1,
        photoUrl: 'https://avatars.mds.yandex.net/i?id=0b6108c3b803ffea84c028a45e84533c207375bc-4303535-images-thumbs&n=13',
        followed: false,
        fullName: 'Dmitry',
        status: 'I am a boss',
        location: { city: 'Minsk', country: 'Belarus' }
      },
      {
        id: 2,
        photoUrl: 'https://avatars.mds.yandex.net/i?id=0b6108c3b803ffea84c028a45e84533c207375bc-4303535-images-thumbs&n=13',
        followed: true,
        fullName: 'Sveta',
        status: 'Hello everybody',
        location: { city: 'Kiev', country: 'Ukrane' }
      },
      {
        id: 3,
        photoUrl: 'https://avatars.mds.yandex.net/i?id=0b6108c3b803ffea84c028a45e84533c207375bc-4303535-images-thumbs&n=13',
        followed: false,
        fullName: 'Irina',
        status: 'Bla-bla-bla',
        location: { city: 'Moscow', country: 'Russia' }
      },
    ])
  }

  return (
    <div>
      {
        props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.userPhoto} />
            </div>
            <div>
              {u.followed
                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>)
      }
    </div>
  )
}

export default Users;