import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let posts = props.profilePage.posts;
  let postsElements = posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost();
    props.statePost("");
  };

  let statePost = () => {
    let text = newPostElement.current.value;
    props.statePost(text);
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
