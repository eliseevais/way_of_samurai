import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />);
  let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message} />);
  let newMessageBody = state.newMessageBody;

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }

  if (!props.isAuth) return <Navigate to='/login' />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
      </div>
      <AddMessageForm onSubmit={addNewMessage} />
    </div>
  )
}

export default Dialogs;