import React from "react";
import { addPostActionCreator, statePostActionCreator } from "../../../Redux/profile-reduecr";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let statePost = (text) => {
    let action = statePostActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={statePost}
      addPost={addPost}
      posts={state.profilePage.posts}
      postWait={state.profilePage.postWait}
    />
  );
};

export default MyPostsContainer;
