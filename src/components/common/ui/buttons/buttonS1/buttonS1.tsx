// Components
import Link from "next/link";

// Styles
import style from "../styles/buttons.module.scss";

// Types
type Props = {
  type?: string;
  path?: string;
  styles?: string;
  icon?: boolean;
  text: string | React.ReactNode;
  onClick?: () => any;
};

const ButtonS1: React.FC<Props> = ({
  type = "link",
  path = "/",
  styles,
  text,
  icon,
  onClick,
}) => {
  return (
    <div className={`${style.buttons1} ${styles}`}>
      {type === "btn" ? (
        <button onClick={onClick} className="iconBtn">
          {text}
        </button>
      ) : (
        <Link href={path} className={`${icon ? "iconBtn" : ""}`}>
          {text}
        </Link>
      )}
    </div>
  );
};

export default ButtonS1;
