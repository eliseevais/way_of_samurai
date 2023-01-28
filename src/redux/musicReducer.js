const ADD_SONG = 'ADD_SONG';
const REMOVE_SONG = 'REMOVE_SONG';
const SET_SONGSLIST = 'SET_SONGSLIST';

let initialState = {
  songsList: [
    { id: 1, author: 'Muse', songTitle: 'Uprising', addStatus: true },
    { id: 2, author: 'Sting', songTitle: 'Desert Rose', addStatus: true },
    { id: 3, author: '2Pac', songTitle: 'Smile', addStatus: false },
  ]
}

const musicReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_SONG:
      return {
        ...state,
        songsList: state.songsList.map(song => {
          if (song.id === action.songId) {
            return { ...song, addStatus: true }
          }
          return song;
        })
      };

    case REMOVE_SONG:
      return {
        ...state,
        songsList: state.songsList.map(song => {
          if (song.id === action.songId) {
            return { ...song, addStatus: false }
          }
          return song;
        })
      };

    case SET_SONGSLIST: {
      return { ...state, songsList: [...state.songsList, ...action.songsList]}
    }

    default:
      return state;
  }
}

export const addSongAC = (songId) => ({ type: ADD_SONG, songId });
export const removeSongAC = (songId) => ({ type: REMOVE_SONG, songId });
export const setSongsListAC = (songsList) => ({ type: SET_SONGSLIST, songsList })

export default musicReducer;