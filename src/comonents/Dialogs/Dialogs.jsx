import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  let dialogs = props.state.dialogs; //  App.js пробрасывает сюда данные через обертку
  let messages = props.state.messages; // App.js пробрасывает сюда данные через обертку
  let dialogsElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id} ava={d.ava} />);
  let messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
