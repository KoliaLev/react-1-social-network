import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.posts__Block}>
      my posts
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message="Hi, how are you?" />
        <Post message="It's my first post!" />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
