import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HeaderContainer from './components/Header/HeaderContainer';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import MusicContainer from './components/Music/MusicContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {

  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile/:userId?' element={<ProfileContainer />} />
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/users' element={ <UsersContainer />} />

          <Route path='/music' element={<MusicContainer />} />
          <Route path='/news' element={<News />} />
          <Route path='/settings' element={<Settings />} />

          <Route path='/friends' element={<Friends />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
