import Preloader1 from "../../common/preloaders/Preloader1";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.userProfile) {
    return <Preloader1 />;
  }
  return (
    <div>
      {/* <div>
        <img
          src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
          alt=""
        />
      </div> */}
      <div className={s.description__block}>
        <img className={s.ava} src={props.userProfile.photos.large} alt="ava" />
        <div>Status: {props.userProfile.aboutMe}</div>
        <div>Full name: {props.userProfile.fullName} </div>
        <div>Looking for a job: {props.userProfile.lookingForAJob ? "Yes" : "No"} </div>
        <div>Description: {props.userProfile.lookingForAJobDescription}</div>
        <div>
          contacts:
          <ul>
            <li>facebook: {props.userProfile.contacts.facebook}</li>
            <li>website: {props.userProfile.contacts.website}</li>
            <li>vk: {props.userProfile.contacts.vk}</li>
            <li>twitter: {props.userProfile.contacts.twitter}</li>
            <li>instagram: {props.userProfile.contacts.instagram}</li>
            <li>youtube: {props.userProfile.contacts.youtube}</li>
            <li>github: {props.userProfile.contacts.github}</li>
            <li>mainLink: {props.userProfile.contacts.mainLink}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
