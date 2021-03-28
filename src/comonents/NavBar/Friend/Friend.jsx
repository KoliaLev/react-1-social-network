import s from "./Friend.module.css";
import { NavLink } from "react-router-dom";

const Friend = (props) => {
  return (
    <div className={s.friend}>
      <img src={props.ava} alt="avatarca" />
      <div>{props.name}</div>
    </div>
  );
};

export default Friend;
