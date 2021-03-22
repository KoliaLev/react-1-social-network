import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div className={s.content}>
        <div className={s.cover}>
          
        </div>
        <div>
          <img className={s.ava} src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
        </div>
        <MyPosts/>
      </div>
    )
}

export default Profile