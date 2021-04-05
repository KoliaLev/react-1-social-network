const ADD_POST = "ADD-POST";
const STATE_POST = "STATE-POST";

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 23 },
    { id: 2, message: "It's my first post!", likesCount: 0 },
  ],
  postWait: "waiting for post",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let post = {
        id: 5,
        message: state.postWait,
        likesCount: 0,
      };
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(post);
      stateCopy.postWait = "";
      return stateCopy;
    }
    case STATE_POST: {
      let stateCopy = { ...state };
      stateCopy.postWait = action.text;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const statePostActionCreator = (text) => ({ type: STATE_POST, text: text });

export default profileReducer;
