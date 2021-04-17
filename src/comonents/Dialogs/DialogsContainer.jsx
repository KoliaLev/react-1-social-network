import React from "react";
import { connect } from "react-redux";
import { stateMessage, sendMessage } from "../../Redux/dialogs-reducer";
import withAuthRedirectComponent from "../Hoc/withAuthRedirect";
import Dialogs from "./Dialogs";

// const DialogsContainer = (props) => {
//   let sendMessage = () => {
//     props.store.dispatch(sandMessageActionCreator());
//   };

//   let stateMessage = (text) => {
//     props.store.dispatch(stateMessageActionCreator(text));
//   };

//   return (
//     <Dialogs
//       stateMessage={stateMessage}
//       sendMessage={sendMessage}
//       dialogs={props.store.getState().dialogsPage.dialogs}
//       messages={props.store.getState().dialogsPage.messages}
//       messageWait={props.store.getState().dialogsPage.messageWait}
//     />
//   );
// };

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     stateMessage: (text) => dispatch(stateMessageActionCreator(text)),
//     sendMessage: () => dispatch(sandMessageActionCreator()),
//   };
// };

const withAuthDialogComponent = withAuthRedirectComponent(Dialogs);

const DialogsContainer = connect(mapStateToProps, { stateMessage, sendMessage })(
  withAuthDialogComponent
);

export default DialogsContainer;
