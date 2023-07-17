import React, { Component, Suspense, lazy, useEffect } from 'react';
import './App.css';
import { Routes, Route, HashRouter, BrowserRouter, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HeaderContainer from './components/Header/HeaderContainer';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import UsersContainer from './components/Users/UsersContainer';
import MusicContainer from './components/Music/MusicContainer';
import LoginPage from './components/Login/Login';
import { Provider, connect } from 'react-redux';
import { initializeApp } from "./redux/appReducer";
import { compose } from 'redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Preloader from './components/Common/Preloader/Preloader';
import store from './redux/reduxStore';
import NotFound from './components/404/404';
//import ProfileContainer from './components/Profile/ProfileContainer';
const ProfileContainer = lazy(
  () => import('./components/Profile/ProfileContainer'))
//import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = lazy(
  () => import('./components/Dialogs/DialogsContainer'))

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component {...props} router={{ location, navigate, params }} />
    );
  }
  return ComponentWithRouterProp;
}

class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/" element={<Navigate to="/profile" />} />              <Route path='/profile/:userId?' element={<ProfileContainer />} />
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              <Route path='/users' element={<UsersContainer />} />

              <Route path='/music' element={<MusicContainer />} />
              <Route path='/news' element={<News />} />
              <Route path='/settings' element={<Settings />} />

              <Route path='/friends' element={<Friends />} />

              <Route path='/login' element={<LoginPage />} />

              <Route path='*' element={<NotFound />} />

            </Routes>
          </Suspense>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const AppSamuraiJS = (props) => {
  return (
    <HashRouter>
      {/* <BrouserRouter basename={process.env.PUBLIC_URL}> */}
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  )
}

export default AppSamuraiJS;