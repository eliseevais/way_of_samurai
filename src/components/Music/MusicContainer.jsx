import React from "react";
import Music from "./Music";
import { connect } from "react-redux";
import { addSongAC, removeSongAC, setSongsListAC } from "../../redux/musicReducer";

let mapStateToProps = (state) => {
  return {
    songsList: state.musicPage.songsList
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addSong: (songId) => {
      dispatch(addSongAC(songId));
    },
    removeSong: (songId) => {
      dispatch(removeSongAC(songId));
    },
    setSongsList: (songsList) => {
      dispatch(setSongsListAC(songsList));
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Music);