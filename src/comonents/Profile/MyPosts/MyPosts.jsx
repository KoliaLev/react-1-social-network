import React from "react";
import { addPostActionCreator, statePostActionCreator } from "../../../Redux/profile-reduecr";

import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let posts = props.profilePage.posts;
  let postsElements = posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let statePost = () => {
    let text = newPostElement.current.value;
    let action = statePostActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={s.posts__Block}>
      my posts
      <div>
        <div>
          <textarea ref={newPostElement} value={props.profilePage.postWait} onChange={statePost} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
