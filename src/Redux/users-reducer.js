const TOGLE_FOLLOW = "TOGLE-FOLLOW";
const SET_USERS = "SET-USERS";

const initialState = {
  users: [
    // {
    //   id: 1,
    //   photoUrl:
    //     "https://st2.depositphotos.com/4285045/7260/i/600/depositphotos_72609979-stock-photo-ojos-de-gata.jpg",
    //   fullName: "Kolia",
    //   isFriend: false,
    //   status: "I am a boss",
    //   location: { city: "Vinnytsia", country: "Ukraine" },
    // },
    // {
    //   id: 2,
    //   photoUrl:
    //     "https://st2.depositphotos.com/4285045/7260/i/600/depositphotos_72609979-stock-photo-ojos-de-gata.jpg",
    //   fullName: "Vasia",
    //   isFriend: true,
    //   status: "I am a boss",
    //   location: { city: "Kiev", country: "Ukraine" },
    // },
    // {
    //   id: 3,
    //   photoUrl:
    //     "https://st2.depositphotos.com/4285045/7260/i/600/depositphotos_72609979-stock-photo-ojos-de-gata.jpg",
    //   fullName: "Shvartsneger",
    //   isFriend: false,
    //   status: "I am a boss",
    //   location: { city: "Los Angeles", country: "USA" },
    // },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, isFriend: !u.isFriend };
          }
          return u;
        }), // проходимся по масиву и изменяем значение isFriend на противоположное если id совпадает
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };

    default:
      return state;
  }
};

export const togleFollowAC = (userId) => ({ type: TOGLE_FOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
