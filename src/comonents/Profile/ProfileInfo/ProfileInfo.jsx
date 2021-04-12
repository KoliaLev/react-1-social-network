import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img
          src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
          alt=""
        />
      </div>
      <div className={s.description__block}>
        {props.userProfile ? (
          <img className={s.ava} src={props.userProfile.photos.large} />
        ) : (
          "loading"
        )}
        <div>Status: {props.userProfile ? props.userProfile.aboutMe : "loading"}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
