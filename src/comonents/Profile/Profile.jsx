import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        profilePage={props.state.profilePage}
        dispatch={props.dispatch}
        // statePost={props.store.statePost.bind(props.store)}
      />
    </div>
  );
};

export default Profile;
