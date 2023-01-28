import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';

const Navbar = (props) => {
  const setActive = ({ isActive }) => (isActive ? s.active : s.item);
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" className={setActive}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" className={setActive}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" className={setActive}>Users</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" className={setActive}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" className={setActive}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" className={setActive}>Settings</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/friends" className={setActive}>Friends</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;