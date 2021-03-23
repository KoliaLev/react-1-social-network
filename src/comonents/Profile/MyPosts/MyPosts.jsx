import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  
    return (       
        <div>
            my posts
            <div >New post</div>
          <Post message='Hi, how are you?'/>
          <Post message="It's my first post!"/>
          <Post />
          <Post />
          <Post/>
        </div>       
    )
}

export default MyPosts