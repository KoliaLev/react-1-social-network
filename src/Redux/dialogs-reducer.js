const SEND_MESSAGE = "SEND-MESSAGE";
const STATE_MESSAGE = "STATE-MESSAGE";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case STATE_MESSAGE:
      state.messageWait = action.mes;
      return state;
    case SEND_MESSAGE:
      let message = {
        id: 6,
        message: state.messageWait,
      };
      state.messages.push(message);
      state.messageWait = "";
      return state;
    default:
      return state;
  }
};

export const sandMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const stateMessageActionCreator = (text) => ({ type: STATE_MESSAGE, mes: text });

export default dialogsReducer;
