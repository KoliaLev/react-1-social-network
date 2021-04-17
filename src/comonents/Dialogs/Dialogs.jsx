import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";
import React from "react";
import { Redirect } from "react-router";

const Dialogs = (props) => {
  if (!props.isAuth) return <Redirect to="/login" />;

  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} ava={d.ava} />
  ));
  let messagesElements = props.dialogsPage.messages.map((m) => <Message message={m.message} />);

  let newMessageElement = React.createRef();

  let onSendMessage = () => {
    props.sendMessage();
  };

  let onStateMessage = () => {
    let text = newMessageElement.current.value;
    props.stateMessage(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <div>
            <textarea
              ref={newMessageElement}
              value={props.dialogsPage.messageWait}
              onChange={onStateMessage}
            />
          </div>
          <div>
            <button onClick={onSendMessage}>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
