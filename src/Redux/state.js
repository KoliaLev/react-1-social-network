// let renderEntireTree = () => {};

// export const subscribe = (observer) => {
//   renderEntireTree = observer;
// };

let store = {
  _subscriber() {
    console.log("do not have subscriber");
  },

  subscribe(observer) {
    this._subscriber = observer;
  },

  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 23 },
        { id: 2, message: "It's my first post!", likesCount: 0 },
      ],
      postWait: "waiting for post",
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
      messageWait: "waiting for new message",
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
  },

  getState() {
    return this._state;
  },

  dispatch(action) {
    debugger;
    // { type : 'ADD-POST'}
    if (action.type === "ADD-POST") {
      let post = {
        id: 5,
        message: this._state.profilePage.postWait,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(post);
      this._state.profilePage.postWait = "";
      this._subscriber(this.getState());
    } else if (action.type === "STATE-POST") {
      //todo
      this._state.profilePage.postWait = action.post;
      this._subscriber(this.getState());
    } else if (action.type === "STATE-MESSAGE") {
      this._state.dialogsPage.messageWait = action.mes;
      this._subscriber(this.getState());
    } else if (action.type === "SEND-MESSAGE") {
      let message = {
        id: 6,
        message: this._state.dialogsPage.messageWait,
      };
      this._state.dialogsPage.messages.push(message);
      this._state.dialogsPage.messageWait = "";
      this._subscriber(this.getState());
    }
  },
};

// let state = {
//   profilePage: {
//     posts: [
//       { id: 1, message: "Hi, how are you?", likesCount: 23 },
//       { id: 2, message: "It's my first post!", likesCount: 0 },
//     ],
//     postWait: "waiting for post",
//   },
//   dialogsPage: {
//     dialogs: [
//       { id: 1, name: "Max", ava: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" },
//       {
//         id: 2,
//         name: "Anna",
//         ava: "https://www.meme-arsenal.com/memes/7d1e30bf0401d9916e7daf4ac09865d8.jpg",
//       },
//       {
//         id: 3,
//         name: "Helen",
//         ava: "https://www.meme-arsenal.com/memes/f879015643fc2ac160fbfe7a3bbe23cd.jpg",
//       },
//       { id: 4, name: "Neo", ava: "https://i.redd.it/6qlicimybejy.jpg" },
//       { id: 5, name: "Morfeus", ava: "https://i.redd.it/lmwdwki1rfg21.jpg" },
//     ],

//     messages: [
//       { id: 1, message: "Hi" },
//       { id: 2, message: "Hello, how are you?" },
//       { id: 3, message: "I`m fine" },
//       { id: 4, message: "I`m fine" },
//       { id: 5, message: "I`m fine" },
//     ],
//     messageWait: "waiting for new message",
//   },
//   sidebar: {
//     friends: [
//       {
//         id: 1,
//         name: "Vasya",
//         ava:
//           "https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png",
//       },
//       {
//         id: 2,
//         name: "Valera",
//         ava:
//           "https://seeding.com.ua/wp-content/uploads/2017/04/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%BE%D1%82%D0%B7%D1%8B%D0%B2%D0%BE%D0%B2.jpg",
//       },
//       {
//         id: 3,
//         name: "Carbon",
//         ava: "https://i.pinimg.com/originals/04/a8/73/04a87347b071ec062a586e02c23f6221.png",
//       },
//     ],
//   },
// };

// export let statePost = (post) => {
//   state.profilePage.postWait = post;

//   renderEntireTree(state);
// };

// export let addPost = () => {
//   let post = {
//     id: 5,
//     message: state.profilePage.postWait,
//     likesCount: 0,
//   };
//   state.profilePage.posts.push(post);
//   state.profilePage.postWait = "";
//   renderEntireTree(state);
// };

// export let stateMessage = (mes) => {
//   state.dialogsPage.messageWait = mes;

//   renderEntireTree(state);
// };

// export let sendMessage = () => {
//   let message = {
//     id: 6,
//     message: state.dialogsPage.messageWait,
//   };
//   state.dialogsPage.messages.push(message);
//   state.dialogsPage.messageWait = "";
//   renderEntireTree(state);
// };

// export default state;

export default store;
