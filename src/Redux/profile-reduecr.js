const ADD_POST = "ADD-POST";
const STATE_POST = "STATE-POST";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let post = {
        id: 5,
        message: state.postWait,
        likesCount: 0,
      };
      state.posts.push(post);
      state.postWait = "";
      return state;
    case STATE_POST:
      state.postWait = action.text;
      return state;
    default:
      return state;
  }
};

export default profileReducer;
