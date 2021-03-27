import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialog/" + props.id;

  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <DialogItem name="Max" id="1" />
        <DialogItem name="Anna" id="2" />
        <DialogItem name="Helen" id="3" />
        <DialogItem name="Neo" id="4" />
        <DialogItem name="Morfeus" id="5" />
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="Hello, how are you?" />
        <Message message="I`m fine" />
      </div>
    </div>
  );
};

export default Dialogs;
