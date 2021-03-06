import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const STATE_POST = "STATE-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 23 },
    { id: 2, message: "It's my first post!", likesCount: 0 },
  ],
  postWait: "waiting for post",
  userProfile: null,
  status: null,
  // isFetch: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let post = {
        id: 5,
        message: state.postWait,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, post],
        postWait: "",
      };
    }
    case STATE_POST: {
      return {
        ...state,
        postWait: action.text,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        userProfile: action.newUser,
      };
    }
    case SET_USER_STATUS: {
      return {
        ...state,
        status: action.newStatus,
      };
    }
    default:
      return state;
  }
};

export const getOneUser = (userId) => (dispatch) => {
  usersAPI.getOneUser(userId).then((data) => {
    dispatch(setUserProfile(data));
  });
};

export const apdateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((data) => {
    dispatch(setUserStatus(status));
  });
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((data) => {
    dispatch(setUserStatus(data));
  });
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const statePostActionCreator = (text) => ({ type: STATE_POST, text: text });
export const setUserProfile = (user) => ({ type: SET_USER_PROFILE, newUser: user });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, newStatus: status });

export default profileReducer;
