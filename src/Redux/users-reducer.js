const TOGLE_FOLLOW = "TOGLE-FOLLOW";
const SET_USERS = "SET-USERS";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGLE_IS_FETCH = "TOGLE_IS_FETCH";

const initialState = {
  users: [],
  usersCount: 10, // количество людей которое отображается
  totalUsersCount: 0,
  currentPage: 1,
  isFetch: false,
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

    default:
      return state;
  }
};

export const togleFollowAC = (userId) => ({ type: TOGLE_FOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setTotalUsersAC = (totalUsers) => ({ type: SET_TOTAL_USERS, totalUsers });
export const setCurrentPageAC = (page) => ({ type: SET_CURRENT_PAGE, currentPage: page });
export const togleIsFetchAC = (isFetch) => ({ type: TOGLE_IS_FETCH, isFetch });

export default usersReducer;
