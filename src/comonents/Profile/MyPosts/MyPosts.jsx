import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let posts = props.state;
  let postsElements = posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();
  let addPost = () => {
    props.addPost(newPostElement.current.value);
  };

  return (
    <div className={s.posts__Block}>
      my posts
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
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
