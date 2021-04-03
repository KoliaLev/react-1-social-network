const initialState = {
  friends: [
    {
      id: 1,
      name: "Vasya",
      ava:
        "https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png",
    },
    {
      id: 2,
      name: "Valera",
      ava:
        "https://seeding.com.ua/wp-content/uploads/2017/04/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%BE%D1%82%D0%B7%D1%8B%D0%B2%D0%BE%D0%B2.jpg",
    },
    {
      id: 3,
      name: "Carbon",
      ava: "https://i.pinimg.com/originals/04/a8/73/04a87347b071ec062a586e02c23f6221.png",
    },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
