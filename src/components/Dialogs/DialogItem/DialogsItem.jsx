import React from "react";
import s from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {

  let path = '/dialogs/' + props.id;

  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>
        <img src="https://photoptichka.ru/wp-content/uploads/2015/09/998.jpg"></img>
        {props.name}
      </NavLink>
    </div>
  )
}


export default DialogItem;