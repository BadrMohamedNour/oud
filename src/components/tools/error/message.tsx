import style from "./styles/message.module.scss";

type Props = {
  message: string;
  styles?: object;
};

function Message({ message, styles }: Props) {
  return (
    <div className={style.messageContainer}>
      <div className="container">
        <div className="content-box" style={styles}>
          <p className="message-text">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default Message;
