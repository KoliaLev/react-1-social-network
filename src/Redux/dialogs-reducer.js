const SEND_MESSAGE = "SEND-MESSAGE";
const STATE_MESSAGE = "STATE-MESSAGE";

const initialState = {
  dialogs: [
    { id: 1, name: "Max", ava: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" },
    {
      id: 2,
      name: "Anna",
      ava: "https://www.meme-arsenal.com/memes/7d1e30bf0401d9916e7daf4ac09865d8.jpg",
    },
    {
      id: 3,
      name: "Helen",
      ava: "https://www.meme-arsenal.com/memes/f879015643fc2ac160fbfe7a3bbe23cd.jpg",
    },
    { id: 4, name: "Neo", ava: "https://i.redd.it/6qlicimybejy.jpg" },
    { id: 5, name: "Morfeus", ava: "https://i.redd.it/lmwdwki1rfg21.jpg" },
  ],

  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hello, how are you?" },
    { id: 3, message: "I`m fine" },
    { id: 4, message: "I`m fine" },
    { id: 5, message: "I`m fine" },
  ],
  messageWait: "waiting for new message",
};

const dialogsReducer = (state = initialState, action) => {
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
