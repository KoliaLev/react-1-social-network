import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";
import React from "react";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} ava={d.ava} />
  ));
  let messagesElements = props.dialogsPage.messages.map((m) => <Message message={m.message} />);

  let newMessageElement = React.createRef();

  let sendMessage = () => {
    props.sendMessage();
    props.stateMessage("");
  };

  let stateMessage = () => {
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
              onChange={stateMessage}
            />
          </div>
          <div>
            <button onClick={sendMessage}>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
