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
  let dialogs = [
    { id: 1, name: "Max" },
    { id: 2, name: "Anna" },
    { id: 3, name: "Helen" },
    { id: 4, name: "Neo" },
    { id: 5, name: "Morfeus" },
  ];

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hello, how are you?" },
    { id: 3, message: "I`m fine" },
    { id: 4, message: "I`m fine" },
    { id: 5, message: "I`m fine" },
  ];

  let dialogsElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
