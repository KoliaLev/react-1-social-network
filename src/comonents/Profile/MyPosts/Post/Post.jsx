import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg"
        alt="speaker's ava"
      />
      {props.message}
      <div>
        <span>like</span> <span>{props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
