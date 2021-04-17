import { headerAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
// const TOGLE_IS_FETCH = "TOGLE_IS_FETCH";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  //   isFetch: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: { userId, email, login },
});

export const setAuthUser = () => (dispatch) => {
  headerAPI.setAuth().then((response) => {
    debugger;
    if (response.resultCode === 0) {
      let { id, email, login } = response.data;
      dispatch(setAuthUserData(id, email, login));
    }
  });
};

// export const togleIsFetch = (isFetch) => ({ type: TOGLE_IS_FETCH, isFetch });

export default authReducer;
