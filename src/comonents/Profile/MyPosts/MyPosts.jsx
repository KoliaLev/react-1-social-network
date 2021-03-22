import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (       
        <div>
            my posts
            <div >New post</div>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post/>
        </div>       
    )
}

export default MyPosts