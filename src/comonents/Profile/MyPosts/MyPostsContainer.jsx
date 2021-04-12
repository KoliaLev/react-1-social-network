import { connect } from "react-redux";
import { addPostActionCreator, statePostActionCreator } from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

// const MyPostsContainer = (props) => {
//   let state = props.store.getState();
//   let addPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   };

//   let statePost = (text) => {
//     let action = statePostActionCreator(text);
//     props.store.dispatch(action);
//   };

//   return (
//     <MyPosts
//       updateNewPostText={statePost}
//       addPost={addPost}
//       posts={state.profilePage.posts}
//       postWait={state.profilePage.postWait}
//     />
//   );
// };

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => dispatch(statePostActionCreator(text)),
    addPost: () => dispatch(addPostActionCreator()),
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
