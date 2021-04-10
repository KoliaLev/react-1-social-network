import preloader from "./../../../assets/images/Preloader1.png";
import s from "./Preloader.module.css";

const Preloader1 = (props) => {
  return (
    <div className={s.preloader}>
      <img src={preloader} />
    </div>
  );
};

export default Preloader1;
