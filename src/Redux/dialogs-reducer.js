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

export default dialogsReducer;
