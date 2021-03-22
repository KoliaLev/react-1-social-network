import s from './Post.module.css'

const Post = () => {
  return (      
    <div className={s.item}>
      <img src='https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg' />
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
    )
}

export default Post