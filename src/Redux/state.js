let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 23 },
      { id: 2, message: "It's my first post!", likesCount: 0 },
    ],
  },
  dialogsPage: {
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
  },
  sidebar: {
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
  },
};

export default state;
