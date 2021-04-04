import React from "react";
import { sandMessageActionCreator, stateMessageActionCreator } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let sendMessage = () => {
    props.store.dispatch(sandMessageActionCreator());
  };

  let stateMessage = (text) => {
    props.store.dispatch(stateMessageActionCreator(text));
  };

  return (
    <Dialogs
      stateMessage={stateMessage}
      sendMessage={sendMessage}
      dialogs={props.store.getState().dialogsPage.dialogs}
      messages={props.store.getState().dialogsPage.messages}
      messageWait={props.store.getState().dialogsPage.messageWait}
    />
  );
};

export default DialogsContainer;
