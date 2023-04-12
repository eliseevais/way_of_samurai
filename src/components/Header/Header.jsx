import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src='https://www.adobe.com/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium' />

      <div className={s.loginBlock}>
        { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
      </div>
    </header>
  )
}

export default Header;