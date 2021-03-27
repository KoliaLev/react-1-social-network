import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  // let dialogs = [
  //   { id: 1, name: "Max" },
  //   { id: 2, name: "Anna" },
  //   { id: 3, name: "Helen" },
  //   { id: 4, name: "Neo" },
  //   { id: 5, name: "Morfeus" },
  // ];

  // let messages = [
  //   { id: 1, message: "Hi" },
  //   { id: 2, message: "Hello, how are you?" },
  //   { id: 3, message: "I`m fine" },
  //   { id: 4, message: "I`m fine" },
  //   { id: 5, message: "I`m fine" },
  // ];

  let dialogs = props.dialogs; //  App.js пробрасывает сюда данные через обертку
  let messages = props.messages; // App.js пробрасывает сюда данные через обертку

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
