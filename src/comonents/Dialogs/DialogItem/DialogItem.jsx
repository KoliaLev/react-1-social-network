import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialog/" + props.id;

  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>
        <img src={props.ava} alt="ava" />
        <div> {props.name}</div>
      </NavLink>
    </div>
  );
};

export default DialogItem;
