import s from "./../Dialogs.module.css";

const Message = (props) => {
  return (
    <div className={s.message}>
      <img
        src="https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png"
        alt="авка"
      />
      <div>{props.message}</div>
    </div>
  );
};

export default Message;
