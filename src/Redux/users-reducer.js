import { usersAPI } from "../api/api";

const TOGLE_FOLLOW = "TOGLE-FOLLOW";
const SET_USERS = "SET-USERS";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGLE_IS_FETCH = "TOGLE_IS_FETCH";
const IS_FETCH_FOLLOW_USER = "IS_FETCH_FOLLOW_USER";

const initialState = {
  users: [],
  usersCount: 10, // количество людей которое отображается
  totalUsersCount: 0,
  currentPage: 1,
  isFetch: false,
  isFetchFollowUser: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: !u.followed };
          }
          return u;
        }), // проходимся по масиву и изменяем значение isFriend на противоположное если id совпадает
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case SET_TOTAL_USERS:
      return {
        ...state,
        totalUsersCount: action.totalUsers,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case TOGLE_IS_FETCH:
      return {
        ...state,
        isFetch: action.isFetch,
      };
    case IS_FETCH_FOLLOW_USER:
      return {
        ...state,
        isFetchFollowUser: action.isFetch
          ? [...state.isFetchFollowUser, action.id]
          : state.isFetchFollowUser.filter((el) => el != action.id),
      };

    default:
      return state;
  }
};

export const togleFollow = (userId) => ({ type: TOGLE_FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalUsers = (totalUsers) => ({ type: SET_TOTAL_USERS, totalUsers });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, currentPage: page });
export const togleIsFetch = (isFetch) => ({ type: TOGLE_IS_FETCH, isFetch });
export const isFetchFollowUserCreator = (isFetch, id) => ({
  type: IS_FETCH_FOLLOW_USER,
  isFetch,
  id,
});

export const getUsers = (currentPage, usersCount) => (dispatch) => {
  dispatch(togleIsFetch(true));

  usersAPI.getUsers(currentPage, usersCount).then((data) => {
    dispatch(setUsers(data.items));
    dispatch(setTotalUsers(data.totalCount));
    dispatch(togleIsFetch(false));
  });
};

export const getFollow = (user) => (dispatch) => {
  dispatch(isFetchFollowUserCreator(true, user.id));
  let request = user.followed ? usersAPI.deleteFollow(user.id) : usersAPI.postFollow(user.id);
  request.then((response) => {
    if (response.resultCode === 0) {
      dispatch(togleFollow(user.id));
      dispatch(isFetchFollowUserCreator(false, user.id));
    }
  });

  // if (user.followed) {
  //   usersAPI.deleteFollow(user.id).then((response) => {
  //     if (response.resultCode === 0) {
  //       dispatch(togleFollow(user.id));
  //       dispatch(isFetchFollowUserCreator(false, user.id));
  //     }
  //   });
  // } else {
  //   usersAPI.postFollow(user.id).then((response) => {
  //     if (response.resultCode === 0) {
  //       dispatch(togleFollow(user.id));
  //       dispatch(isFetchFollowUserCreator(false, user.id));
  //     }
  //   });

  // }
};

export default usersReducer;
