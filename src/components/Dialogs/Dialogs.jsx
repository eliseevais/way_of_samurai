import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { Navigate  } from "react-router-dom";

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />);
  let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message} />);
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessageBody(body);
  }

  if (!props.isAuth) return <Navigate to='/login'/> ;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>

        {dialogsElements}

      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div><textarea
            onChange={onNewMessageChange}
            value={newMessageBody}
            placeholder="Enter your message">
          </textarea></div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;